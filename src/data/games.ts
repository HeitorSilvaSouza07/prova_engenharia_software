import chrisImg from '../assets/characters/chris-redfield.png'
import jillImg from '../assets/characters/jill-valentine.png'
import leonImg from '../assets/characters/leon-kennedy.png'
import ethanImg from '../assets/characters/ethan-winters.png'
import nemesisImg from '../assets/characters/nemesis.png'
import birkinImg from '../assets/characters/william-birkin.png'
import saddlerImg from '../assets/characters/saddler.png'
import weskerImg from '../assets/characters/wesker.png'
import simmonsImg from '../assets/characters/simmons.jpg'
import jackImg from '../assets/characters/jack-baker.png'
import dimitrescuImg from '../assets/characters/dimitrescu.png'
import tyrantImg from '../assets/characters/tyrant.png'
import mrXImg from '../assets/characters/mr-x-coat.jpg'
import logoRe1 from '../assets/logos/re1.png'
import logoRe2 from '../assets/logos/re2.png'
import logoRe3 from '../assets/logos/re3.png'
import logoRe4 from '../assets/logos/re4.png'
import logoRe5 from '../assets/logos/re5.png'
import logoRe6 from '../assets/logos/re6.png'
import logoRe7 from '../assets/logos/re7.png'
import logoVillage from '../assets/logos/village.png'
import re1Scene1 from '../assets/scenes/re1-1.jpg'
import re1Scene2 from '../assets/scenes/re1-2.jpg'
import re1Scene3 from '../assets/scenes/re1-3.jpg'
import re2Scene1 from '../assets/scenes/re2-1.jpg'
import re2Scene2 from '../assets/scenes/re2-2.jpg'
import re2Scene3 from '../assets/scenes/re2-3.jpg'
import re3Scene1 from '../assets/scenes/re3-1.jpg'
import re3Scene2 from '../assets/scenes/re3-2.jpg'
import re3Scene3 from '../assets/scenes/re3-3.jpg'
import re4Scene1 from '../assets/scenes/re4-1.jpg'
import re4Scene2 from '../assets/scenes/re4-2.jpg'
import re4Scene3 from '../assets/scenes/re4-3.jpg'
import re5Scene1 from '../assets/scenes/re5-1.jpg'
import re5Scene2 from '../assets/scenes/re5-2.jpg'
import re5Scene3 from '../assets/scenes/re5-3.jpg'
import re6Scene1 from '../assets/scenes/re6-1.jpg'
import re6Scene2 from '../assets/scenes/re6-2.jpg'
import re6Scene3 from '../assets/scenes/re6-3.jpg'
import re7Scene1 from '../assets/scenes/re7-1.jpg'
import re7Scene2 from '../assets/scenes/re7-2.jpg'
import re7Scene3 from '../assets/scenes/re7-3.jpg'
import villageScene1 from '../assets/scenes/village-1.jpg'
import villageScene2 from '../assets/scenes/village-2.jpg'
import villageScene3 from '../assets/scenes/village-3.jpg'

export interface Character {
  name: string
  image: string
  description: string
}

export interface Game {
  slug: string
  navLabel: string
  title: string
  year: number
  tagline: string
  logo: string
  genre: string
  developer: string
  cast: Character[]
  history: string[]
  scenes: string[]
}

export const games: Game[] = [
  {
    slug: 're1',
    navLabel: 'RE1',
    title: 'Resident Evil (1996)',
    year: 1996,
    tagline: 'A Mansão Spencer',
    logo: logoRe1,
    genre: 'Survival Horror',
    developer: 'Capcom',
    cast: [
      {
        name: 'Chris Redfield',
        image: chrisImg,
        description:
          'Agente da S.T.A.R.S. da Alpha Team, determinado a desvendar o mistério da mansão.',
      },
      {
        name: 'Jill Valentine',
        image: jillImg,
        description:
          'Agente da S.T.A.R.S. especialista em explosivos e lockpicking, parceira de Chris.',
      },
      {
        name: 'Tyrant',
        image: tyrantImg,
        description:
          'Primeiro protótipo de bioweapon da Umbrella, criado a partir do T-Vírus.',
      },
    ],
    history: [
      'Em 1998, uma série de assassinatos bizarros assombra os arredores de Raccoon City. A S.T.A.R.S., equipe especial da polícia local, é enviada para investigar. A Bravo Team desaparece sem deixar vestígios, e então a Alpha Team — liderada por Albert Wesker, com Chris Redfield e Jill Valentine — parte em seu resgate.',
      'Após encontrarem o helicóptero da Bravo Team abatido e serem atacados por cães zumbis, os sobreviventes são levados até uma mansão isolada nos bosques ao redor da cidade: a Mansão Spencer.',
      'Dentro da mansão, Chris e Jill descobrem que o lugar esconde os laboratórios secretos da Umbrella Corporation, responsável pela criação do vírus T (T-Vírus), usado em experimentos de armas biológicas. As salas da mansão estão repletas de monstros — desde tubarões geneticamente modificados até o Tyrant, o primeiro protótipo de bioweapon da corporação.',
      'Após enfrentar horrores e desvendar os segredos da Umbrella, os sobreviventes conseguem escapar da mansão em um helicóptero. Mas a verdade sobre a corporação e os perigos do vírus T mal começam a se revelar.',
    ],
    scenes: [re1Scene1, re1Scene2, re1Scene3],
  },
  {
    slug: 're2',
    navLabel: 'RE2',
    title: 'Resident Evil 2 (1998)',
    year: 1998,
    tagline: 'A Queda de Raccoon City',
    logo: logoRe2,
    genre: 'Survival Horror',
    developer: 'Capcom',
    cast: [
      {
        name: 'Leon S. Kennedy',
        image: leonImg,
        description:
          'Policial novato que se vê no centro do desastre biológico de Raccoon City.',
      },
      {
        name: 'Mr. X',
        image: mrXImg,
        description:
          'Tyrant T-103 de terno e chapéu, enviado pela Umbrella para eliminar testemunhas.',
      },
      {
        name: 'William Birkin',
        image: birkinImg,
        description:
          'Cientista da Umbrella que desenvolveu o G-Vírus e se transforma em monstro.',
      },
    ],
    history: [
      'Outubro de 1998. O vírus T já escapou dos laboratórios da Umbrella e transformou Raccoon City em um caos. Leon S. Kennedy chega à cidade para seu primeiro dia como policial e encontra as ruas tomadas por zumbis.',
      'Claire Redfield, irmã de Chris, chega à mesma cidade procurando notícias do irmão. Leon e Claire se cruzam, mas são obrigados a seguir caminhos diferentes: Leon explora a delegacia de polícia e os esgotos sob a cidade, enquanto Claire entra em um orfanato ligado aos experimentos da Umbrella.',
      'Para eliminá-los, a Umbrella envia o Mr. X — um Tyrant T-103 de terno e chapéu — que persegue Leon e Claire pela delegacia e pelos laboratórios. Ao mesmo tempo, eles descobrem a conspiração corporativa e reencontram William Birkin, o cientista que desenvolveu o G-Vírus. Birkin, gravemente ferido, se injeta com o vírus e se transforma em um monstro mutante.',
      'No final, Leon e Claire conseguem escapar de Raccoon City, mas a cidade é completamente destruída por um míssil lançado pelo governo para conter o desastre — apagando, na tentativa, todo rastro do que aconteceu ali.',
    ],
    scenes: [re2Scene1, re2Scene2, re2Scene3],
  },
  {
    slug: 're3',
    navLabel: 'RE3',
    title: 'Resident Evil 3: Nemesis (1999)',
    year: 1999,
    tagline: 'A Caçada do Nemesis',
    logo: logoRe3,
    genre: 'Survival Horror',
    developer: 'Capcom',
    cast: [
      {
        name: 'Jill Valentine',
        image: jillImg,
        description:
          'Veterana da S.T.A.R.S. que luta para sobreviver à caçada do Nemesis.',
      },
      {
        name: 'Nemesis',
        image: nemesisImg,
        description:
          'Tyrant modificado com o parasita NE-α, criado para eliminar os membros da S.T.A.R.S.',
      },
    ],
    history: [
      'Jill Valentine decide ficar em Raccoon City para investigar a Umbrella, mas acaba presa no meio do surto do vírus T. A cidade está tomada por zumbis e criaturas dos laboratórios.',
      'A cada esquina, Jill é caçada pelo Nemesis — um Tyrant modificado, mais forte e inteligente, criado pela Umbrella especificamente para eliminar os membros da S.T.A.R.S. que conhecem os segredos da corporação.',
      'Durante a fuga, Jill se alia a Carlos Oliveira, um jovem mercenário da Umbrella, e juntos enfrentam a destruição de Raccoon City. A dupla sobrevive a emboscadas, laboratórios em ruínas e confrontos diretos com o Nemesis.',
      'No desfecho, Jill derrota o Nemesis em uma batalha final e escapa de Raccoon City momentos antes que a cidade seja varrida por um míssil — encerrando de vez o capítulo mais sombrio da história da cidade.',
    ],
    scenes: [re3Scene1, re3Scene2, re3Scene3],
  },
  {
    slug: 're4',
    navLabel: 'RE4',
    title: 'Resident Evil 4 (2005)',
    year: 2005,
    tagline: 'A Missão na Espanha',
    logo: logoRe4,
    genre: 'Survival Horror / Ação',
    developer: 'Capcom',
    cast: [
      {
        name: 'Leon S. Kennedy',
        image: leonImg,
        description:
          'Agente do governo americano em uma missão de resgate na Espanha rural.',
      },
      {
        name: 'Osmund Saddler',
        image: saddlerImg,
        description:
          'Líder da seita Los Iluminados, que domina os aldeões com o parasita Plaga.',
      },
    ],
    history: [
      'Seis anos após a destruição de Raccoon City, Leon S. Kennedy se tornou um agente do governo americano. Sua nova missão: resgatar Ashley Graham, filha do presidente dos Estados Unidos, sequestrada e levada a uma remota aldeia na Espanha.',
      'Ao chegar, Leon descobre que os aldeões estão sob o controle de uma seita chamada Los Iluminados, liderada por Osmund Saddler. O grupo utiliza um parasita ancestral chamado Plaga, capaz de tomar controle total dos corpos e mentes de seus hospedeiros.',
      'Durante a investigação, Leon é infectado pelo Plaga e conta com a ajuda de Luis Sera, um ex-pesquisador da Umbrella, e de Ada Wong, uma misteriosa agente com interesses próprios.',
      'Após enfrentar Saddler e salvar Ashley, Leon escapa com a presidente e cumpre sua missão — mas o mundo agora sabe que bioarmas muito mais antigas e perigosas que os vírus da Umbrella existem.',
    ],
    scenes: [re4Scene1, re4Scene2, re4Scene3],
  },
  {
    slug: 're5',
    navLabel: 'RE5',
    title: 'Resident Evil 5 (2009)',
    year: 2009,
    tagline: 'O Protocolo Uroboros',
    logo: logoRe5,
    genre: 'Ação / Survival Horror',
    developer: 'Capcom',
    cast: [
      {
        name: 'Chris Redfield',
        image: chrisImg,
        description:
          'Veterano da S.T.A.R.S. agora na B.S.A.V., enfrentando o passado em terras africanas.',
      },
      {
        name: 'Albert Wesker',
        image: weskerImg,
        description:
          'Antigo líder da S.T.A.R.S. com poderes sobre-humanos e um plano de purificação.',
      },
    ],
    history: [
      'Chris Redfield, agora agente da B.S.A.V. (Bio-terrorism Security Assessment Alliance), viaja até uma vila remota na África ao lado de Sheva Alomar. A missão é investigar o tráfico ilegal de armas biológicas na região.',
      'A investigação logo se revela muito maior: os locais estão infectados por parasitas, e nos laboratórios secretos escondidos sob a vila são desenvolvidos os vírus Ndripanga e o aterrorizante Uroboros — um agente capaz de exterminar massivamente quem não for "digno" de sobreviver.',
      'No meio da missão, Chris reencontra Albert Wesker, seu antigo líder da S.T.A.R.S., que agora é um vilão com poderes sobre-humanos. Wesker revela seu plano: usar o Uroboros para "purificar" a humanidade, exterminando os fracos e dominando o mundo.',
      'Em uma batalha final explosiva, Chris e Sheva conseguem derrotar Wesker e destruir o Uroboros, encerrando mais um capítulo da longa conspiração contra a humanidade.',
    ],
    scenes: [re5Scene1, re5Scene2, re5Scene3],
  },
  {
    slug: 're6',
    navLabel: 'RE6',
    title: 'Resident Evil 6 (2012)',
    year: 2012,
    tagline: 'A Conspiração Global',
    logo: logoRe6,
    genre: 'Ação / Survival Horror',
    developer: 'Capcom',
    cast: [
      {
        name: 'Leon S. Kennedy',
        image: leonImg,
        description:
          'Veterano de Raccoon City investigando um ataque bioterrorista em Tall Oaks.',
      },
      {
        name: 'Chris Redfield',
        image: chrisImg,
        description:
          'Agente caçando os responsáveis pelo ataque biológico em China.',
      },
      {
        name: 'Derek Simmons',
        image: simmonsImg,
        description:
          'Poderoso homem de governo por trás da conspiração do C-Vírus.',
      },
    ],
    history: [
      'Uma nova ameaça biológica se espalha pelo mundo: o C-Vírus. Diferente dos surtos anteriores, desta vez o perigo é global e envolve nações, organizações e governos em um mesmo tabuleiro.',
      'Quatro protagonistas estão no centro do caos: Leon S. Kennedy e Helena Harper investigam um ataque bioterrorista em Tall Oaks, Estados Unidos; Chris Redfield e Piers Nivans caçam responsáveis pelo ataque em China; Jake Muller — aliado de Sherry Birkin — descobre laços inesperados com o passado da Umbrella; e a espionagem Ada Wong persegue seus próprios objetivos.',
      'Por trás de tudo está Derek Simmons, um poderoso homem de governo, e suas engrenagens de conspiração. Personagens de todas as gerações da série se cruzam em uma trama que mistura traição, vingança e responsabilidade.',
      'Após confrontos em diversos países e a revelação de toda a conspiração, os protagonistas conseguem impedir o plano de Simmons — mas o custo humano e as perdas pessoais deixam cicatrizes profundas em todos.',
    ],
    scenes: [re6Scene1, re6Scene2, re6Scene3],
  },
  {
    slug: 're7',
    navLabel: 'RE7',
    title: 'Resident Evil 7: Biohazard (2017)',
    year: 2017,
    tagline: 'A Família Baker',
    logo: logoRe7,
    genre: 'Survival Horror (FPS)',
    developer: 'Capcom',
    cast: [
      {
        name: 'Ethan Winters',
        image: ethanImg,
        description:
          'Homem comum disposto a atravessar o inferno para resgatar sua esposa.',
      },
      {
        name: 'Jack Baker',
        image: jackImg,
        description:
          'Patriarca da família Baker, brutal e imortal sob o controle do fungo Mold.',
      },
    ],
    history: [
      '2017. Ethan Winters, um homem comum, recebe uma mensagem misteriosa de sua esposa Mia, desaparecida havia anos. Ele viaja até a decadente plantação Baker, na Louisiana, para encontrá-la.',
      'No local, Ethan conhece a aterrorizante família Baker — Jack, Marguerite e Lucas — todos sob o controle de um fungo chamado Mold, que lhes devolve a vida após mortes violentas e distorce suas mentes.',
      'Conseguindo resgatar Mia e sobreviver aos horrores da plantação, Ethan descobre um laboratório subterrâneo ligado a uma organização chamada E-Nave e ao projeto "Eveline": uma bioarma em forma de garota capaz de infectar pessoas remotamente com o Mold.',
      'No clímax, Ethan derrota Eveline e escapa com vida — mas a verdade sobre Mia, sobre si mesmo e sobre o poder do Mold ainda guarda uma última surpresa, revelada apenas em seguida.',
    ],
    scenes: [re7Scene1, re7Scene2, re7Scene3],
  },
  {
    slug: 'village',
    navLabel: 'Village',
    title: 'Resident Evil Village (2021)',
    year: 2021,
    tagline: 'A Vila dos Lordes',
    logo: logoVillage,
    genre: 'Survival Horror (FPS)',
    developer: 'Capcom',
    cast: [
      {
        name: 'Ethan Winters',
        image: ethanImg,
        description:
          'Pai disposto a sacrificar tudo para recuperar sua filha Rose.',
      },
      {
        name: 'Alcina Dimitrescu',
        image: dimitrescuImg,
        description:
          'Condessa imortal e gigante, um dos quatro lordes leais à matriarca da vila.',
      },
    ],
    history: [
      'Alguns anos após os eventos da plantação Baker, Ethan Winters e Mia vivem em paz com a filha, Rose, até que Chris Redfield invade sua casa, mata Mia e leva a criança. Destruído, Ethan parte atrás de Chris.',
      'Ele acidentalmente cai em uma remota vila europeia dominada por uma criatura chamada Megamycete e por quatro lordes leais à matriarca: a condesa Alina Dimitrescu, Donna Beneviento, Salvatore Moreau e Karl Heisenberg — cada um com seus próprios territórios e horrores.',
      'Durante a caçada, Ethan descobre que Rose é a chave para o poder do Megamycete e enfrenta os lordes um a um, revelando segredos dolorosos sobre o passado de Mia e sobre a própria natureza de sua "existência" desde o incidente em Louisiana.',
      'No desfecho, Ethan se sacrifica para destruir o Megamycete e proteger Rose, encerrando definitivamente a linhagem do mold — e selando sua própria história com um ato de redenção.',
    ],
    scenes: [villageScene1, villageScene2, villageScene3],
  },
]
