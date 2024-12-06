const getGitHubUserInfo = async() => {
    const 
        token = process.env.NEXT_PUBLIC_GPAT,
        user = process.env.NEXT_PUBLIC_GUSER;

    try {
        const response = await fetch(`https://api.github.com/users/${user}`, {
            method: 'GET',
            headers: {
                'Authorization': `token ${token}`,
                'Content-Type': 'application/json'
            }   
        });

        if (!response.ok) {
            throw new Error("Error while fetching user info from GitHub API...");
        }

        return await response.json();
    } catch(error) {
        console.error(`${error.message}`);
    }
    
}

const getGitHubRepoInfo = async() => {
    const token = process.env.NEXT_PUBLIC_GPAT;

    try {
        const response = await fetch(`https://api.github.com/user/repos?visibility=all`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `token ${token}`
            }
        });

        if (!response.ok) {
            throw new Error("Could not fetch repositories info from GitHub API...");
        }

        return await response.json()
    } catch(error) {
        console.error(`${error.message}`);
    }
}

const getGitHubCommitInfo = async() => {
    const 
        token = process.env.NEXT_PUBLIC_GPAT,
        user = process.env.NEXT_PUBLIC_GUSER,
        reposName = (await getGitHubRepoInfo()).map(repo => repo.name);
    
    try {
        const repos = reposName.map(async(repo) => {
            return await fetch(`https://api.github.com/repos/${user}/${repo}/commits?per_page=100`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `token ${token}`
                }
            });  
        });

        return await Promise.all((await Promise.all(repos)).map(async response => {
            if (!response.ok) {
                throw new Error("Could not fetch commits info from GitHub API...");
            }

            return (await response.json()).length;
        }));
    } catch(error) {
        console.error(`${error.message}`);
    }
}

export {
    getGitHubUserInfo,
    getGitHubCommitInfo
};