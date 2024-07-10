import { Octokit } from '@octokit/core';

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN
});

async function getRepoFiles(owner: string, repo: string) {
  try {
    const response = await octokit.request('GET /repos/BSData/wh40k-killteam/contents', {
      owner,
      repo
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching repo files:', error);
    return [];
  }
}

export { getRepoFiles };
