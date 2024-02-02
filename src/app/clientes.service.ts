import { Injectable } from '@angular/core';
import { Cliente } from './clientes/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  getCliente() : Cliente {
    let cliente : Cliente = new Cliente();
    cliente.nome = 'Fulano';
    cliente.cpf = '123123456';
    return cliente;
  }
}
