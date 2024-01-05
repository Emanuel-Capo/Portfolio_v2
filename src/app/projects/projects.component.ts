import { Component } from '@angular/core';

type Project = {
  name: string,
  description: Array<string>,
  img: string,
  techs: Array<string>,
  link:string
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  Projects: Array<Project> = [
    {
      name: 'S.O.S. Consortia',
      img: 'assets/sosCons.png',
      link:"https://sos-consortia.onrender.com/",
      description:[
        'SOS Consortia es una web-app con todas las funcionalidades necesarias para manejar todo tipo de consorcio, desde un pequeño condominio a un gran edificio.',
        'Proyecto realizado en el entorno de simulación NoCountry.'
      ],
      techs:[
        'React',
        'Typescript',
        'Tailwind',
        'Zustand',
        'NodeJS',
        'MongoDB',
        'Trello'
      ]
    },
    {
      name: 'SurShop',
      img: 'assets/sur.png',
      link:'https://surshop-beta.vercel.app/',
      description:[
        'SurShop es un e-commerce desarrollado para simplificar el proceso de publicación y venta de productos. Cuenta con interfaces de registro de usuarios, gestión de venta, exploración y compras de Productos, carrito de compras e implementación de MercadoPago',
        'Proyecto realizado en el entorno de simulación NoCountry.'
      ],
      techs:[
        '.Net',
        'C#',
        'SQL Server',
        'React',
        'Next',
        'Tailwind',
        'MercadoPago',
        'Cloudinary',
        'Metodologias Agiles',
        'Jira',
      ]
    },
    {
      name: 'CV-Builder',
      img: 'assets/cvbuild.png',
      link:'https://generador-de-cv.web.app/home',
      description:[
        'Web-app generadora de curriculums. Completa el formulario con tus datos personales, habílidades, formación, experiencia y otros datos importantes, descarga tu CV e impresiona a los empleadores. Cuenta con registro de usuarios, generador de CVs mediante un formulario, descarga de CV en formato PDF y dashboard de administrador para búsqueda de perfiles adecuados',
        'Proyecto realizado en XAcademy.'
      ],
      techs:[
        'NodeJS',
        'Typescript',
        'Prisma',
        'Postgresql',
        'Angular',
        'CSS',
        'Docker',
        'Trello',
      ]
    },
    {
      name: 'LudenS',
      img: 'assets/ludens.png',
      link:'https://ludens-two.vercel.app/',
      description:[
        'Ludens es un sitio web de juegos educativos para niños. En nuestra palataforma aprendes jugando con tus amigos con un sistema de mensajes predefinido, apostando por la seguridad. Desafía a tus amigos, comparte tu ranking, agrega a favoritos y mucho mas.',
        'Proyecto realizado en el entorno de simulación NoCountry.'
      ],
      techs:[
        'React',
        'SASS',
        'Redux',
        'NodeJS',
        'MongoDB',
        'Cloudinary',
        'Jira'
      ]
    },
    {
      name: 'PetStore',
      img: 'assets/pets.png',
      link:'https://petstore-eight.vercel.app/',
      description:[
        'PetStore es un e-commerce de productos para mascotas. Cuenta con un carrito de compras y la opción de pagar con tarjeta de crédito, débito y paypal. También posee un dashboard para el administrador en el cual se pueden agregar, editar o borrar los productos en venta.',
        'Proyecto realizado en el entorno de simulación NoCountry.'
      ],
      techs:[
        'Angular',
        'Material UI',
        'Firebase'
      ]
    },
  ]
}
