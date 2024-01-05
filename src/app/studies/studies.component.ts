import { Component } from '@angular/core';

type Study = {
  title: string,
  academy: string,
  description: string,
  year: number,
  link: string
  techs: Array<string>
}

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent {

  Studies: Array<Study> = [
    {
      title: 'Programador en .NET',
      academy: 'bdtAcademy',
      description: 'Curso brindado por la empresa bdtGlobal, con especial incapié en lógica de programación, algoritmos, programación orientada a objetos y manejo del lenguaje C# con .NET.',
      year: 2023,
      link:"../../assets/Certificado3.pdf",
      techs: [
        'C#',
        '.NET',
        'POO',
        'Lógica',
        'Algoritmos'
      ]
    },
    {
      title: 'Programador FullStack',
      academy: 'XAcademy',
      description: 'Curso brindado por las empresas Santex y Technology with Purpose Foundation, donde profundicé mis conocimientos en maquetado web frontend, desarrollo backend, bases de datos relacionales, manejo de repositorios, Docker, diseño UX/UI, QA y metodologías ágiles.',
      year: 2023,
      link:"../../assets/Certificado2.pdf",
      techs: [
        'HTML',
        'CSS',
        'JavaScript',
        'Angular',
        'Github',
        'Docker',
        'NodeJS',
        'SQL',
        'UX/UI',
        'QA',
        'Scrum'
      ]
    },
    {
      title: 'Programador FullStack',
      academy: 'Argentina Programa',
      description: 'Curso muy completo donde aprendí sobre desarrollo fontend estático y dinámico con Angular, bases de datos, programación orientada a objetos, desarrollo backend con Java y Spring Boot, buenas prácticas y DevOps.',
      year: 2022,
      link:"../../assets/Certificado1.pdf",
      techs: [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'Angular',
        'Java',
        'Spring Boot'
      ]
    }
  ]

}
