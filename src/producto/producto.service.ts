import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

const productos = [
  { id: 1, nombre: "Lapicera", descripcion: "Lapicera azul", precio: 25, disponible: true },
  { id: 2, nombre: "Cuaderno", descripcion: "Cuaderno rayado A4", precio: 150, disponible: true },
  { id: 3, nombre: "Mochila", descripcion: "Mochila escolar", precio: 900, disponible: false },
  { id: 4, nombre: "Cartuchera", descripcion: "Cartuchera de tela", precio: 200, disponible: true },
];


@Injectable()
export class ProductoService {
  create(createProductoDto: CreateProductoDto) {
    return 'This action adds a new producto';
  }

  findAll() {
    return productos;
  }

  findOne(id: number) {
   return productos.find(producto => producto.id === id);
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    const upProducto = this.findOne(id)!;

    updateProductoDto.nombre && (upProducto.nombre = updateProductoDto.nombre)
    updateProductoDto.descripcion && (upProducto.descripcion = updateProductoDto.descripcion)
    updateProductoDto.precio && (upProducto.precio = updateProductoDto.precio)
    updateProductoDto.disponible && (upProducto.disponible = updateProductoDto.disponible)

    return productos


  }

  remove(id: number) {
    productos.filter(producto => producto.id !== id);

    return productos;
  }
}
