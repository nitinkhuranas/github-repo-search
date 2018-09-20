export const getCommitHistory = (state) => state.commitHistory;

export const getCommits = (state) => getCommitHistory(state) ? getCommitHistory(state).commits : [];

export const getIsSuccess = (state) => state.isSuccess;