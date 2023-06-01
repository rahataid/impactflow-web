import { createSlice } from "@reduxjs/toolkit";
import { CommunitiesService } from "@services/communities";

const initialState = {
    isLoading: false,
    error: null,
    communities: [],
    community: null,

    projects: [],
    transactions: [],
};

const slice = createSlice({
    name: "community",
    initialState,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },
        hasError(state, action) {
            state.isLoading = false;
            state.error = action.payload.message;
        },
        getCommunitiesSuccess(state, action) {
            state.isLoading = false;
            state.communities = action.payload;
        },
        getCommunitySuccess(state, action) {
            state.isLoading = false;
            state.community = action.payload;
        },
        getCommunityProjectsSuccess(state, action) {
            state.isLoading = false;
            state.projects = action.payload;
        },
        getCommunityTransactionsSuccess(state, action) {
            state.isLoading = false;
            state.transactions = action.payload;
        },
    },
});

export default slice;

export const { hasError } = slice.actions;

export const selectCommunities = (state) => state.community.communities;
export const selectProjects = (state) => state.community.projects;
export const selectGenderDistributionReport = (state) =>
    state.community.community.summary.map((type) => {
        console.log(type);
        let data = type?.summaryData.map(([key, values]) => {
            let splitedData = key.split(`_`);
            if (splitedData[0] == "gender") {
                return {
                    label: splitedData[1],
                    value: values,
                };
            }
        });

        return data;
    });
export const selectBankDistributionReport = (state) =>
    state.community?.community?.summary?.map((type) => {
        return type?.summaryData?.map(([key, values]) => {
            let splitedData = key.split(`_`);
            if (splitedData[0] == "bank") {
                return {
                    label: splitedData[1] == "yes" ? "hasBank" : "hasNotBank",
                    value: values,
                };
            }
        });
    });
export const selectInternetAccessDistributionReport = (state) =>
    state.community.community.summary?.map((type) => {
        return type?.summaryData?.map(([key, values]) => {
            let splitedData = key.split(`_`);
            if (splitedData[0] == "internet") {
                return {
                    label:
                        splitedData[1] == "yes"
                            ? "hasInternet"
                            : "hasNotInternet",
                    value: values,
                };
            }
        });
    });

// Thunk for fetching communities
export const getCommunities = (params) => {
    return async (dispatch) => {
        try {
            const { data: res } = await CommunitiesService.getCommunitiesList();
            dispatch(slice.actions.getCommunitiesSuccess(res));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
};

export const getCommunityDetails = (id) => {
    return async (dispatch) => {
        try {
            const { data: res } = await CommunitiesService.getCommunitiyDetails(
                id
            );

            dispatch(slice.actions.getCommunitySuccess(res));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
};

export const getCommunityProjects = (id) => {
    return async (dispatch) => {
        try {
            const { data: res } =
                await CommunitiesService.getCommunitiyProjects(id);
            dispatch(slice.actions.getCommunityProjectsSuccess(res));
        } catch (error) {
            console.log({ error });
            dispatch(hasError(error));
        }
    };
};