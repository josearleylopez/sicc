export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Inicio',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'maestros',
        data: {
          menu: {
            title: 'Maestros',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'escuelas',
            data: {
              menu: {
                title: 'Escuelas',
              }
            }
          },
          {
            path: 'minutas',
            data: {
              menu: {
                title: 'Minutas',
              }
            }
          }
        ]
      },
      {
        path: 'programaciones',
        data: {
          menu: {
            title: 'Programaciones',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'prociclos',
            data: {
              menu: {
                title: 'Ciclos',
              }
            }
          },
          {
            path: 'proescuelas',
            data: {
              menu: {
                title: 'Escuelas',
              }
            }
          }
        ]
      },
      {
        path: 'informes',
        data: {
          menu: {
            title: 'Informes',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'infentrega',
            data: {
              menu: {
                title: 'Lista entrega',
              }
            }
          },
          {
            path: 'infdespacho',
            data: {
              menu: {
                title: 'Lista despacho',
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Otros',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: ['/login'],
            data: {
              menu: {
                title: 'Login'
              }
            }
          },
          {
            path: ['/register'],
            data: {
              menu: {
                title: 'Registro'
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Correo',
            url: 'http://www.construyamoscolombis.com',
            icon: 'ion-android-exit',
            order: 800,
            target: '_blank'
          }
        }
      }
    ]
  }
];
