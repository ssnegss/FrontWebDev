import { client } from "./client";

export const createActivity = (data) => {
  return client.post("/activity", data);
};

export const getActivity = (id) => {
  return client.get(`/activity/${id}`);
};

export const updateActivity = (id, data) => {
  return client.put(`/activity/${id}`, data);
};

export const deleteActivity = (id) => {
  return client.delete(`/activity/${id}`);
};

export const getWeek = (weekNumber, year) => {
  return client.get(`/week/${weekNumber}/${year}`);
};

export const getDay = (date) => {
  return client.get(`/day/${date}`);
};