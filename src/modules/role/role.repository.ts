import { Repository } from 'typeorm';

import { EntityRepository } from 'typeorm';
import { Role } from './role.entity';

@EntityRepository(Role)
export class RoleRepository extends Repository<Role> {}
