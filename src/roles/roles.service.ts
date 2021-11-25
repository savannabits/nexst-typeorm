import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private roles: Repository<Role>
  ) { }
  async create(createRoleInput: CreateRoleInput) {
    return await this.roles.save(createRoleInput);
  }

  async findAll(): Promise<Role[]> {
    return this.roles.find();
  }

  async findOne(id: number): Promise<Role> {
    return this.roles.findOne(id);
  }

  async update(id: number, updateRoleInput: UpdateRoleInput) {
    await this.roles.update({id}, updateRoleInput);
    return this.roles.findOne(id);
  }

  async remove(id: number) {
    const role = await this.roles.findOne(id);
    if (role) {
      await this.roles.delete({id});
    }
    return role;
  }
}
