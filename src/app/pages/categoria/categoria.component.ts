import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';  // ← AGREGA ESTO

@Component({
  selector: 'app-categoria',
  standalone: true,  // ← AGREGA ESTO
  imports: [CommonModule, RouterModule],  // ← AGREGA ESTO
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categoriaId: number = 0;
  nombreCategoria: string = '';
  productos: any[] = [];

  // Todos los productos con sus categorías
  todosLosProductos = [
    // Categoría 1 - Electrónica
    { 
      id: 1, 
      nombre: 'TV Samsung 55', 
      precio: 899, 
      categoriaId: 1,
      img: 'data:image/jpeg;base64,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'
    },
    { 
      id: 2, 
      nombre: 'Impresora', 
      precio: 79, 
      categoriaId: 1,
      img: 'data:image/jpeg;base64,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'
    },
    { 
      id: 3, 
      nombre: 'Teclado Mecánico RGB', 
      precio: 129, 
      categoriaId: 1,
      img: 'https://tecnonacho.com/wp-content/uploads/2025/03/imagen_2025-03-05_104711709.png'
    },
    { 
      id: 4, 
      nombre: 'Monitor Samsung 27"', 
      precio: 349, 
      categoriaId: 1,
      img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&auto=format&fit=crop'
    
    },

    { 
      id: 4, 
      nombre: 'Monitor Samsung 27"', 
      precio: 349, 
      categoriaId: 1,
      img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&auto=format&fit=crop'
    
    },

    { 
      id: 4, 
      nombre: 'Monitor Samsung 27"', 
      precio: 349, 
      categoriaId: 1,
      img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&auto=format&fit=crop'
    
    },

    { 
      id: 4, 
      nombre: 'Monitor Samsung 27"', 
      precio: 349, 
      categoriaId: 1,
      img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&auto=format&fit=crop'
    
    },
    
    
    // Categoría 2 - Smartphones
    { 
      id: 5, 
      nombre: 'Samsung Galaxy S23', 
      precio: 799, 
      categoriaId: 2,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVuQzZ9wMBoNvG1TQWcDirm-PMkY0Qd4UAcw&s'
    },

    { 
      id: 6, 
      nombre: 'Iphone 16 Pro Max', 
      precio: 799, 
      categoriaId: 2,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpzSBQ3-MDzN1GSvD0QSYid9wxW2ukxPn0mw&s'
    },

    { 
      id: 7, 
      nombre: 'Xiaomi Redmi Note 14', 
      precio: 799, 
      categoriaId: 2,
      img: 'https://gsmphone.co/wp-content/uploads/2025/01/xiaomi-redmi-note-14-Negro-medianoche.webp'
    },

    { 
      id: 8, 
      nombre: 'Xiaomi Redmi Note 13', 
      precio: 799, 
      categoriaId: 2,
      img: 'https://exitocol.vtexassets.com/arquivos/ids/24428313/celular-xiaomi-redmi-note-13-4g-256gb-8ram-108mp-verde.jpg?v=638608926095730000'
    },

    { 
      id: 9, 
      nombre: 'Motorola Moto G04s', 
      precio: 799, 
      categoriaId: 2,
      img: 'https://http2.mlstatic.com/D_Q_NP_695661-MLU77654426967_072024-O.webp'
    },

    { 
      id: 5, 
      nombre: 'Samsung Galaxy S23', 
      precio: 799, 
      categoriaId: 2,
      img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&auto=format&fit=crop'
    },
    
    { 
      id: 5, 
      nombre: 'Samsung Galaxy S23', 
      precio: 799, 
      categoriaId: 2,
      img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&auto=format&fit=crop'
    },

    { 
      id: 5, 
      nombre: 'Samsung Galaxy S23', 
      precio: 799, 
      categoriaId: 2,
      img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&auto=format&fit=crop'
    },

    { 
      id: 5, 
      nombre: 'Samsung Galaxy S23', 
      precio: 799, 
      categoriaId: 2,
      img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&auto=format&fit=crop'
    },

    { 
      id: 5, 
      nombre: 'Samsung Galaxy S23', 
      precio: 799, 
      categoriaId: 2,
      img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&auto=format&fit=crop'
    },
    
    // Categoría 3 - PC y Laptops
    { 
      id: 9, 
      nombre: 'MacBook Pro M3', 
      precio: 1999, 
      categoriaId: 3,
      img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&auto=format&fit=crop'
    },
    { 
      id: 10, 
      nombre: 'Dell XPS 15', 
      precio: 1599, 
      categoriaId: 3,
      img: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&auto=format&fit=crop'
    },
    { 
      id: 11, 
      nombre: 'HP Pavilion Gaming', 
      precio: 1199, 
      categoriaId: 3,
      img: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&auto=format&fit=crop'
    },
    { 
      id: 12, 
      nombre: 'Lenovo ThinkPad', 
      precio: 1399, 
      categoriaId: 3,
      img: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?w=400&auto=format&fit=crop'
    },
    
    // Categoría 4 - Gaming
    { 
      id: 13, 
      nombre: 'PlayStation 5', 
      precio: 499, 
      categoriaId: 4,
      img: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&auto=format&fit=crop'
    },
    { 
      id: 14, 
      nombre: 'Xbox Series X', 
      precio: 499, 
      categoriaId: 4,
      img: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400&auto=format&fit=crop'
    },
    { 
      id: 15, 
      nombre: 'Nintendo Switch OLED', 
      precio: 349, 
      categoriaId: 4,
      img: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400&auto=format&fit=crop'
    },
    { 
      id: 16, 
      nombre: 'Steam Deck', 
      precio: 399, 
      categoriaId: 4,
      img: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400&auto=format&fit=crop'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoriaId = +params['id'];
      this.cargarProductos();
    });
  }

  cargarProductos() {
    console.log('Cargando productos de categoría:', this.categoriaId);
    
    this.productos = this.todosLosProductos.filter(
      producto => producto.categoriaId === this.categoriaId
    );
    
    const categorias: any = {
      1: 'Electrónica',
      2: 'Smartphones',
      3: 'PC y Laptops',
      4: 'Gaming'
    };
    
    this.nombreCategoria = categorias[this.categoriaId] || 'Categoría';
    
    console.log('Productos encontrados:', this.productos);
  }
}