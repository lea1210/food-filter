import { fetchRecipes } from './useRecipesData';

global.fetch = jest.fn();

beforeEach(() => fetch.mockClear());

it('should get all recipes', async () => {
  fetch.mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve({
          data: [
            {
              id: 1,
              attributes: {
                name: 'Spaghetti Bolognese',
                description: 'Der einfache Klassiker mit Hackfleisch.',
                createdAt: '2022-05-20T11:15:51.201Z',
                updatedAt: '2022-07-16T14:19:53.699Z',
                publishedAt: '2022-05-20T12:00:09.237Z',
                preperation:
                  'Die Zwiebel schälen und klein würfelig schneiden. Den Knoblauch schälen und in kleine Stücke hacken. Die Karotten waschen, schälen die harten Enden vom Stiel schneiden, den Rest sehr klein schneiden. Die Petersilie waschen, ausschütteln und fein hacken.\nDanach reichlich Salz-Wasser aufkochen die Nudeln darin weichkochen (=al dente) und anschließend durch ein Sieb abgießen.\nIn der Zwischenzeit das Öl in einem Topf erhitzen und darin Knoblauch sowie den Zwiebel darin 4 Minuten dünsten. Die Karotten hinzufügen und weitere 2 Minuten mit dünsten.\nNun das Faschierte beimengen und kurz durchbraten. Tomatensauce, Oregano und Rotwein hinzufügen und die Flüssigkeit etwas reduzieren lassen. Den Deckel auf den Topf und bei kleiner Hitze gut 40-50 Minuten köcheln lassen.\nZum Schluss das Tomatenmark unterrühren und die Sauce mit Salz, Pfeffer und der Petersilie abschmecken.\nDie gekochten Spagetti appetitlich auf Tellern anrichten, die Sauce darüber geben und mit ein paar frischen Basilikumblättern garnieren',
                vegan: false,
                vegetarian: false,
                glutenfree: false,
                lactosefree: true,
                ingredientlist:
                  '1 \tStk \tZwiebel\n2 \tStk \tKnoblauchzehen\n1 \tStk \tKarotte\n1 \tEL \tPetersilie\n370 \tg \tSpaghetti\n1 \tEL \tOlivenöl für den Topf\n350 \tg \tFaschiertes Rindfleisch\n400 \tg \tTomatensauce\n2 \tEL \tOregano\n2 \tEL \tRotwein\n2 \tEL \tTomatenmark\n1 \tPrise \tSalz\n1 \tPrise \tPfeffer',
                image: {
                  data: [
                    {
                      id: 2,
                      attributes: {
                        name: 'bolognese.jpg',
                        alternativeText: 'bolognese.jpg',
                        caption: 'bolognese.jpg',
                        width: 3276,
                        height: 4096,
                        formats: {
                          thumbnail: {
                            name: 'thumbnail_bolognese.jpg',
                            hash: 'thumbnail_bolognese_33c9da9992',
                            ext: '.jpg',
                            mime: 'image/jpeg',
                            path: null,
                            width: 125,
                            height: 156,
                            size: 5.27,
                            url: '/uploads/thumbnail_bolognese_33c9da9992.jpg'
                          },
                          large: {
                            name: 'large_bolognese.jpg',
                            hash: 'large_bolognese_33c9da9992',
                            ext: '.jpg',
                            mime: 'image/jpeg',
                            path: null,
                            width: 800,
                            height: 1000,
                            size: 102.86,
                            url: '/uploads/large_bolognese_33c9da9992.jpg'
                          },
                          medium: {
                            name: 'medium_bolognese.jpg',
                            hash: 'medium_bolognese_33c9da9992',
                            ext: '.jpg',
                            mime: 'image/jpeg',
                            path: null,
                            width: 600,
                            height: 750,
                            size: 63.51,
                            url: '/uploads/medium_bolognese_33c9da9992.jpg'
                          },
                          small: {
                            name: 'small_bolognese.jpg',
                            hash: 'small_bolognese_33c9da9992',
                            ext: '.jpg',
                            mime: 'image/jpeg',
                            path: null,
                            width: 400,
                            height: 500,
                            size: 33.3,
                            url: '/uploads/small_bolognese_33c9da9992.jpg'
                          }
                        },
                        hash: 'bolognese_33c9da9992',
                        ext: '.jpg',
                        mime: 'image/jpeg',
                        size: 1899.65,
                        url: '/uploads/bolognese_33c9da9992.jpg',
                        previewUrl: null,
                        provider: 'local',
                        provider_metadata: null,
                        createdAt: '2022-05-20T18:22:44.173Z',
                        updatedAt: '2022-05-20T18:22:44.173Z'
                      }
                    }
                  ]
                },
                ingredients: {
                  data: [
                    {
                      id: 1,
                      attributes: {
                        name: 'spaghetti',
                        createdAt: '2022-05-20T11:22:40.840Z',
                        updatedAt: '2022-06-17T10:37:17.813Z',
                        publishedAt: '2022-05-20T11:22:45.800Z'
                      }
                    },
                    {
                      id: 3,
                      attributes: {
                        name: 'tomate',
                        createdAt: '2022-05-20T11:23:10.486Z',
                        updatedAt: '2022-06-17T10:38:50.284Z',
                        publishedAt: '2022-05-20T17:14:21.179Z'
                      }
                    },
                    {
                      id: 4,
                      attributes: {
                        name: 'hackfleisch',
                        createdAt: '2022-05-20T11:23:36.832Z',
                        updatedAt: '2022-06-17T10:18:55.123Z',
                        publishedAt: '2022-05-20T12:00:46.233Z'
                      }
                    },
                    {
                      id: 65,
                      attributes: {
                        name: 'salz',
                        createdAt: '2022-05-21T11:35:50.434Z',
                        updatedAt: '2022-06-17T10:35:52.319Z',
                        publishedAt: '2022-05-21T11:35:51.023Z'
                      }
                    },
                    {
                      id: 148,
                      attributes: {
                        name: 'tomatensoße',
                        createdAt: '2022-05-27T11:28:10.383Z',
                        updatedAt: '2022-06-17T10:39:29.510Z',
                        publishedAt: '2022-05-27T11:28:11.057Z'
                      }
                    },
                    {
                      id: 149,
                      attributes: {
                        name: 'tomatensauce',
                        createdAt: '2022-05-27T11:28:30.348Z',
                        updatedAt: '2022-06-17T10:39:17.121Z',
                        publishedAt: '2022-05-27T11:28:31.537Z'
                      }
                    },
                    {
                      id: 219,
                      attributes: {
                        name: 'tomaten',
                        createdAt: '2022-06-17T10:13:46.972Z',
                        updatedAt: '2022-06-17T10:13:48.232Z',
                        publishedAt: '2022-06-17T10:13:48.225Z'
                      }
                    }
                  ]
                }
              }
            }
          ]
        })
    })
  );

  const result = await fetchRecipes('/1');

  expect(fetch).toBeCalledWith('http://localhost:1337/api/recipes/1');

  expect(result).toEqual({
    data: [
      {
        id: 1,
        attributes: {
          name: 'Spaghetti Bolognese',
          description: 'Der einfache Klassiker mit Hackfleisch.',
          createdAt: '2022-05-20T11:15:51.201Z',
          updatedAt: '2022-07-16T14:19:53.699Z',
          publishedAt: '2022-05-20T12:00:09.237Z',
          preperation:
            'Die Zwiebel schälen und klein würfelig schneiden. Den Knoblauch schälen und in kleine Stücke hacken. Die Karotten waschen, schälen die harten Enden vom Stiel schneiden, den Rest sehr klein schneiden. Die Petersilie waschen, ausschütteln und fein hacken.\nDanach reichlich Salz-Wasser aufkochen die Nudeln darin weichkochen (=al dente) und anschließend durch ein Sieb abgießen.\nIn der Zwischenzeit das Öl in einem Topf erhitzen und darin Knoblauch sowie den Zwiebel darin 4 Minuten dünsten. Die Karotten hinzufügen und weitere 2 Minuten mit dünsten.\nNun das Faschierte beimengen und kurz durchbraten. Tomatensauce, Oregano und Rotwein hinzufügen und die Flüssigkeit etwas reduzieren lassen. Den Deckel auf den Topf und bei kleiner Hitze gut 40-50 Minuten köcheln lassen.\nZum Schluss das Tomatenmark unterrühren und die Sauce mit Salz, Pfeffer und der Petersilie abschmecken.\nDie gekochten Spagetti appetitlich auf Tellern anrichten, die Sauce darüber geben und mit ein paar frischen Basilikumblättern garnieren',
          vegan: false,
          vegetarian: false,
          glutenfree: false,
          lactosefree: true,
          ingredientlist:
            '1 \tStk \tZwiebel\n2 \tStk \tKnoblauchzehen\n1 \tStk \tKarotte\n1 \tEL \tPetersilie\n370 \tg \tSpaghetti\n1 \tEL \tOlivenöl für den Topf\n350 \tg \tFaschiertes Rindfleisch\n400 \tg \tTomatensauce\n2 \tEL \tOregano\n2 \tEL \tRotwein\n2 \tEL \tTomatenmark\n1 \tPrise \tSalz\n1 \tPrise \tPfeffer',
          image: {
            data: [
              {
                id: 2,
                attributes: {
                  name: 'bolognese.jpg',
                  alternativeText: 'bolognese.jpg',
                  caption: 'bolognese.jpg',
                  width: 3276,
                  height: 4096,
                  formats: {
                    thumbnail: {
                      name: 'thumbnail_bolognese.jpg',
                      hash: 'thumbnail_bolognese_33c9da9992',
                      ext: '.jpg',
                      mime: 'image/jpeg',
                      path: null,
                      width: 125,
                      height: 156,
                      size: 5.27,
                      url: '/uploads/thumbnail_bolognese_33c9da9992.jpg'
                    },
                    large: {
                      name: 'large_bolognese.jpg',
                      hash: 'large_bolognese_33c9da9992',
                      ext: '.jpg',
                      mime: 'image/jpeg',
                      path: null,
                      width: 800,
                      height: 1000,
                      size: 102.86,
                      url: '/uploads/large_bolognese_33c9da9992.jpg'
                    },
                    medium: {
                      name: 'medium_bolognese.jpg',
                      hash: 'medium_bolognese_33c9da9992',
                      ext: '.jpg',
                      mime: 'image/jpeg',
                      path: null,
                      width: 600,
                      height: 750,
                      size: 63.51,
                      url: '/uploads/medium_bolognese_33c9da9992.jpg'
                    },
                    small: {
                      name: 'small_bolognese.jpg',
                      hash: 'small_bolognese_33c9da9992',
                      ext: '.jpg',
                      mime: 'image/jpeg',
                      path: null,
                      width: 400,
                      height: 500,
                      size: 33.3,
                      url: '/uploads/small_bolognese_33c9da9992.jpg'
                    }
                  },
                  hash: 'bolognese_33c9da9992',
                  ext: '.jpg',
                  mime: 'image/jpeg',
                  size: 1899.65,
                  url: '/uploads/bolognese_33c9da9992.jpg',
                  previewUrl: null,
                  provider: 'local',
                  provider_metadata: null,
                  createdAt: '2022-05-20T18:22:44.173Z',
                  updatedAt: '2022-05-20T18:22:44.173Z'
                }
              }
            ]
          },
          ingredients: {
            data: [
              {
                id: 1,
                attributes: {
                  name: 'spaghetti',
                  createdAt: '2022-05-20T11:22:40.840Z',
                  updatedAt: '2022-06-17T10:37:17.813Z',
                  publishedAt: '2022-05-20T11:22:45.800Z'
                }
              },
              {
                id: 3,
                attributes: {
                  name: 'tomate',
                  createdAt: '2022-05-20T11:23:10.486Z',
                  updatedAt: '2022-06-17T10:38:50.284Z',
                  publishedAt: '2022-05-20T17:14:21.179Z'
                }
              },
              {
                id: 4,
                attributes: {
                  name: 'hackfleisch',
                  createdAt: '2022-05-20T11:23:36.832Z',
                  updatedAt: '2022-06-17T10:18:55.123Z',
                  publishedAt: '2022-05-20T12:00:46.233Z'
                }
              },
              {
                id: 65,
                attributes: {
                  name: 'salz',
                  createdAt: '2022-05-21T11:35:50.434Z',
                  updatedAt: '2022-06-17T10:35:52.319Z',
                  publishedAt: '2022-05-21T11:35:51.023Z'
                }
              },
              {
                id: 148,
                attributes: {
                  name: 'tomatensoße',
                  createdAt: '2022-05-27T11:28:10.383Z',
                  updatedAt: '2022-06-17T10:39:29.510Z',
                  publishedAt: '2022-05-27T11:28:11.057Z'
                }
              },
              {
                id: 149,
                attributes: {
                  name: 'tomatensauce',
                  createdAt: '2022-05-27T11:28:30.348Z',
                  updatedAt: '2022-06-17T10:39:17.121Z',
                  publishedAt: '2022-05-27T11:28:31.537Z'
                }
              },
              {
                id: 219,
                attributes: {
                  name: 'tomaten',
                  createdAt: '2022-06-17T10:13:46.972Z',
                  updatedAt: '2022-06-17T10:13:48.232Z',
                  publishedAt: '2022-06-17T10:13:48.225Z'
                }
              }
            ]
          }
        }
      }
    ]
  });
});
