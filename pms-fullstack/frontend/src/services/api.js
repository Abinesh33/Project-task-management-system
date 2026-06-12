// frontend/src/services/api.js

const BASE = 'https://project-task-management-system-rzb1.onrender.com/api';

async function request(url, options = {}) {
  const res = await fetch(`${BASE}${url}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Request failed');
  }

  return data.data ?? data;
}

// ── Projects ────────────────────────────────────────────────
export const projectsAPI = {
  getAll: () => request('/projects'),

  create: (body) =>
    request('/projects', {
      method: 'POST',
      body: JSON.stringify(body),
    }),

  update: (id, body) =>
    request(`/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
    }),

  delete: (id) =>
    request(`/projects/${id}`, {
      method: 'DELETE',
    }),
};

// ── Tasks ───────────────────────────────────────────────────
export const tasksAPI = {
  getAll: () => request('/tasks'),

  create: (body) =>
    request('/tasks', {
      method: 'POST',
      body: JSON.stringify(body),
    }),

  update: (id, body) =>
    request(`/tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
    }),

  delete: (id) =>
    request(`/tasks/${id}`, {
      method: 'DELETE',
    }),
};