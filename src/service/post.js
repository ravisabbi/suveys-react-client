import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),
    getAllUsersData: builder.query({
      query: () => ({
        url: "/usersData",
        method: "GET",
      }),
    }),
    getAllSurveysOfUser: builder.query({
      query: (userId) => ({
        url: `/surveys/${userId}`,
        method: "GET",
      }),
    }),
    getAllSurveyDataOfUser: builder.query({
      query: (userId) => ({
        url: `/surveysData/${userId}`,
        method: "GET",
      }),
    }),
    getSurveyStatus: builder.query({
      query: (surveyId) => ({
        url: `/surveyForm/${surveyId}`,
        method: "GET",
      }),
    }),
    submitSurvey: builder.mutation({
      query: (surveyId) => ({
        url: `submitSurvey/${surveyId}`,
        method: "PATCH",
      }),
    }),
    inviteUser: builder.mutation({
      query: (email) => ({
        url: "/inviteUser",
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        //responseHandler:(response) => response
      }),
      onfullfilled: (email, { data, response }) => {
        const { status, statusText } = response;
        console.log(status);
        console.log(statusText);
        return { status, data, statusText, email };
      },
      onrejected: (email, error) => {
        return error;
      },
    }),
    sendSurvey: builder.mutation({
      query: (requestBody) => ({
        url: "/sendSurvey",
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      onfullfilled: (email, { data, response }) => {
        const { status, statusText } = response;
        console.log(status);
        console.log(statusText);
        return { status, data, statusText, email };
      },
      onrejected: (email, error) => {
        return error;
      },
    }),
    changeUserAction: builder.mutation({
      query: (requestBody) => ({
        url: "/userAction",
        method: "PATCH",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      onfullfilled: (email, { data, response }) => {
        const { status, statusText } = response;
        console.log(status);
        console.log(statusText);
        return { status, data, statusText, email };
      },
      onrejected: (email, error) => {
        return error;
      },
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetAllUsersDataQuery,
  useGetAllSurveysOfUserQuery,
  useGetAllSurveyDataOfUserQuery,
  useGetSurveyStatusQuery,
  useSubmitSurveyMutation,
  useInviteUserMutation,
  useSendSurveyMutation,
  useChangeUserActionMutation
} = postApi;
