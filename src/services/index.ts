interface UserInfoItems {
    publicRepos: number;
    privateRepos: number;
};

interface GitHubServiceItems {
    getGitHubUserInfo: () => Promise<UserInfoItems | {}>;
    getGitHubCommitInfo: () => Promise<number[] | []> ;
};

const gitHubService = () : GitHubServiceItems => {
    const getGitHubUserInfo = async():Promise<UserInfoItems | {}> => {
        const 
            token = process.env.NEXT_PUBLIC_GPAT,
            user = process.env.NEXT_PUBLIC_GUSER;
    
        try {
            const response = await fetch(`https://api.github.com/users/${user}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `token ${token}`
                }   
            });
    
            if (!response.ok) {
                throw new Error("Error while fetching user info from GitHub API...");
            }
            
            const { public_repos: publicRepos, total_private_repos: privateRepos } = await response.json();

            return {
                publicRepos: parseInt(publicRepos),
                privateRepos: parseInt(privateRepos)
            };
        } catch(error:any) {
            console.error(`${error.message}`);

            return {};
        }
    }
    
    const getGitHubRepoInfo = async():Promise<string[] | []> => {
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

            return (await response.json()).map((info:any) => info.name);
        } catch(error:any) {
            console.error(`${error.message}`);

            return [];
        }
    }
    
    const getGitHubCommitInfo = async():Promise<number[] | []> => {
        const 
            token = process.env.NEXT_PUBLIC_GPAT,
            user = process.env.NEXT_PUBLIC_GUSER,
            repoNames = await getGitHubRepoInfo();

        try {
            const repos = repoNames.map(async(repo:string) => {
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
        } catch(error:any) {
            console.error(`${error.message}`);

            return [];
        }
    }

    return { getGitHubUserInfo, getGitHubCommitInfo };
}

export {
    gitHubService
};