import authAPI from '@/lib/strapi/api-modules/auth';
import contentAPIGenerator from '@/lib/strapi/utils/contentAPIGenerator';

export default (store) => ({
  auth: authAPI,
  projects: contentAPIGenerator('/projects', store),
  taskStatus: contentAPIGenerator('/task-statuses', store),
  tasks: contentAPIGenerator('/tasks', store),
  users: contentAPIGenerator('/users', store),
});
