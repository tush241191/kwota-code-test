import { IProject } from '../../types';

export interface IProjectRepository {
  findAll(): Promise<IProject[]>;
}
