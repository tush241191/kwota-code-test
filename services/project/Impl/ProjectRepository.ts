import { IProject } from '../../../types';
import http from '../../api/http';
import { IProjectRepository } from '../IProjectRepository';

export class ProjectRepository implements IProjectRepository {
  private apiUrl = 'data';

  async findAll(): Promise<IProject[]> {
    const { data, status } = await http.get<IProject[]>(this.apiUrl);
    return data;
  }
}
