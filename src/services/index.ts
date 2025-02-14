import { PiCornersOutLight } from "react-icons/pi";

export interface UserInfoItems {
    publicRepos: number;
    privateRepos: number;
};

interface GitHubServiceItems {
    getGitHubUserInfo: () => Promise<UserInfoItems | {}>;
    getGitHubCommitInfo: () => Promise<number[] | []> ;
};

const gitHubService = ():GitHubServiceItems => {
    const 
        token: (string | undefined) = process.env.NEXT_PUBLIC_GPAT,
        user: (string | undefined) = process.env.NEXT_PUBLIC_GUSER;
    
    const getGitHubUserInfo = async():Promise<UserInfoItems | {}> => {    
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
        try {
            const repos = await getGitHubRepoInfo();
        
            return await Promise.all(repos.map(async(repo:string):Promise<number> => {
                try {
                    let
                    allCommits:any[] = [],
                    page:number = 1,
                    hasMoreCommits:boolean = true;

                    while(hasMoreCommits) {
                        const response = await fetch(`https://api.github.com/repos/${user}/${repo}/commits?per_page=100&page=${page}`, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `token ${token}`
                            }
                        });
    
                        if (!response.ok) throw new Error(`Error while fetching commits for repo ${repo}`);
    
                        const commits = await response.json();
                        allCommits = allCommits.concat(commits);
                        
                        hasMoreCommits = commits.length === 100;
                        page++;
                    }

                    return allCommits.length;
                } catch(error:any) {
                    console.error(`${error.message}`);

                    return [];
                }
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