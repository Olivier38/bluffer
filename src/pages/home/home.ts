import { Component, } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
/*import { SomeProvider } from '../providers/deck/deck';*/


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cards:any = [];
  questionBg = [];
  i: number;
  introEnd: boolean;
  started: boolean;

  constructor(public navCtrl: NavController, private storage: Storage, private alertCtrl: AlertController, /*public deckService: DeckProvider*/) {
    this.started = false;
    this.introEnd = false;
    this.i = 0;
  }

  ngOnInit() {
     
  }

  deleteStorage() {
    this.loadCards();
    console.log("game restart");
    this.i = 0;
    console.log(this.i);
    this.storage.set("i", this.i);
  }

  loadCards() {
    this.cards = [
      {
        "id": "1",
        "question": "Lorsque des chercheurs anglais ont inventé la première webcam, quelle a été sa première utilisation ?",
        "answer": "La surveillance d'une machine a café.",
        "hint": "Les chercheurs voulaient simplement vérifier s'il restait du café dans la pièce d'à côté.",
      },
      {
        "id": "2",
        "question": "Il y 100 millions d'années, pourquoi aurait-il été impossible de prendre un bain de minuit ?",
        "answer": "Parce que les jours ne duraient que 23 heures.",
        "hint": "À sa formation, il y a 4 milliards d'années, la journée terrestre ne durait que 6 heures. ",
      },
      {
        "id": "3",
        "question": "En 1979, le fermier Argentin Pedro Martin Ureta réalise un étrange hommage à sa femme décédée. Lequel ?",
        "answer": "Il a fait pousser un forêt en forme de guitare.",
        "hint": "La forêt et composée de 7000 arbres et mesure plus d'un kilomètre de longueur.",
      },
      {
        "id": "4",
        "question": "En 1685, qu'utilisait-on au Canada en tant que monnaie ?",
        "answer": "Des cartes de jeu sur lesquelles ont inscrivait une valeur.",
        "hint": "À l'époque et pendant plusieurs années, le Canada était en pénurie de pièce de monnaie.",
      },
      {
        "id": "5",
        "question": "Quelle est la particularité de la langue arborigène d'Australie 'Guugu Yimithirr' ?",
        "answer": "Les notions de 'gauche', 'droite', 'haut' et 'bas' n'existent pas",
        "hint": "Dès leur plus jeunes âge, les membres de la tribu utilisent les points cardinaux pour s'orienter.",
      },
      {
        "id": "6",
        "question": "Pendant les combats, quelle technique utilisée par les vikings permettait de savoir si un guerrier était gravement blessé ?",
        "answer": "Le blessé devait boire une soupe à l'oignon très concentrée.",
        "hint": "Si la plaie sentait l'oignon, cela signifiait que la blessure interne était sérieuse.",
      },
      {
        "id": "7",
        "question": "Quelle technique de chasse étrange est utilisée par les corbeaux pour chasser le crapeau ?",
        "answer": "Ils leur piquent le foie pour le faire exploser.",
        "hint": "En endommageant le foie, le crapeau va activer son système de défense et se mettre à gonfler. Sans foie, et troué, celui-ci va finir par faire éclater certains organes.",
      },
      {
        "id": "8",
        "question": "En 1999, comment Coca-Cola s'est-elle créé une mauvaise image auprès du grand public ?",
        "answer": "En adaptant les prix à la température.",
        "hint": "La boisson était plus chère par temps chaud. L'entreprise a rapidement abandonné ce projet suite au mécontement des consommateurs.",
      },
      {
        "id": "9",
        "question": "Qu'est-ce qui est interdit au Vatican et aux Philippines mais nul part ailleurs ?",
        "answer": "Le divorce.",
        "hint": " ",
      },
      {
        "id": "10",
        "question": "En 1977, Le légendaire nageur Américain Mark Spitz a fait une blague au coach de l'équipe de natation de l'URSS. Que lui a-t-il dévoilé sur la raison de son talent ?",
        "answer": "Son succès serait dû à la forme de sa moustache, hydrodynamique.",
        "hint": "C'était évidemment un mensonge. Pourtant, l'année suivante, des nageurs Russes avaient adoptées la même moustache !",
      },
      {
        "id": "11",
        "question": "Qu'a de particulier le livre de Georges Perec 'La disparition' ?",
        "answer": "Il a été écrit sans utiliser la lettre 'e'.",
        "hint": "Le roman compte tout de même 297 pages !",
      },
      {
        "id": "12",
        "question": "En 2010, la population de Berlin était d'environ 3,5 million d'habitants. Pourquoi ce nombre est-il surprenant ?",
        "answer": "Parce que la population était toujours inférieure à celle de Berlin en 1939.",
        "hint": "Au recensement d'août 1945, on dénombre 2 807 405 Berlinois. C'est 1 531 351 personnes de moins qu'en 1939, soit 35,3 %.",
      },
      {
        "id": "13",
        "question": "Ingérer de la tellure (élément chimique proche du métal) conduit le corps à produire de la diméthyle. Même si cela n'est pas dangereux, quel en est l'un des effets ?",
        "answer": "Avoir une haleine et une odeur corporelle proche de l'ail.",
        "hint": "Même ingèrer un millième de tellure provoque cet effet pendant plusieurs mois !",
      },
      {
        "id": "14",
        "question": "Selon une vieille légende allemande, quel est le meilleur remède pour soigner le mal de dents ?",
        "answer": "Embrasser un âne.",
        "hint": " ",
      },
      {
        "id": "15",
        "question": "Quel étrange service propose l'entreprise Algordanza ?",
        "answer": "Transformer les cendres d'un défunt en diamant.",
        "hint": "Le processus consiste à chauffer quelques centaines de grammes de cendres à 1500° C sous un pression de 60 000 Kg/cm².",
      },
      {
        "id": "17",
        "question": "Le 'borborygme' est un terme scientifique utilisé pour désigner un phénomène naturel très commun. Lequel est-ce ?",
        "answer": "Le gargouillement de ventre.",
        "hint": " ",
      },
      {
        "id": "18",
        "question": "Le phénomène de migration des oiseaux n'a pas toujours été évident pour les scientifiques. Comment ont-ils compris que ces oiseaux allaient et venaient périodiquement ?",
        "answer": "En constatant des flèches de tribues africaines plantées dans certains spécimens.",
        "hint": " ",
      },
      {
        "id": "19",
        "question": "Adolf Hitler, Sigmund Freud, Joseph Staline, Léon Trosky et Tito ont un point commun. Lequel ?",
        "answer": "Ils ont tous vécus dans le même quartier de Vienne en 1913.",
        "hint": "Ils fréquentaient notamment le même café : 'le café central'",
      },
      {
        "id": "20",
        "question": "Pendant un temps, les douches du pénitencier Alcatraz étaient volontairement bien chaudes. Pourquoi ?",
        "answer": "Pour que les éventuels évadés ne resistent pas aux températures extérieures glaciales.",
        "hint": " ",
      },
      {
        "id": "21",
        "question": "Quel record détient Valeri Polyakov ?",
        "answer": "Il a passé le plus long séjour dans une station spaciale : 438 jours.",
        "hint": " ",
      },
      {
        "id": "22",
        "question": "Au XIXème siècle aux États-Unis, qu'est-ce qui a directement contribué à l'invention du plastique ?",
        "answer": "Les boules de billard. En voulant trouver un substitut à l'ivoire.",
        "hint": "À l'époque, seul l'ivoire permettait de fabriquer des boules parfaites pour le billard.",
      },
      {
        "id": "23",
        "question": "Le record d'un britannique anonyme dure 59 secondes. Qu'est-ce que c'est ?",
        "answer": "Le plus long pet humain sans interruption.",
        "hint": " ",
      },
      {
        "id": "24",
        "question": "Pourquoi Aitabdel Salem a passé 5 mois en prison aux États-Unis alors qu'il aurait pu être libéré très rapidement.",
        "answer": "Personne ne l'a informé qu'il pouvait payer une caution de 2$.",
        "hint": " ",
      },
      {
        "id": "25",
        "question": "Qu'est-ce que l'hippopotomonstrosesquippedaliophobie ?",
        "answer": "La peur des mots trop longs.",
        "hint": "C'est aussi le mot qui contient le plus de voyelles.",
      },
      {
        "id": "26",
        "question": "Le mot 'jaguar' vient de l'amérindien 'yaguar'. Qu'est-ce qu'il signifie ?",
        "answer": "Celui-qui-tue-d'un-bon",
        "hint": " ",
      },
      {
        "id": "27",
        "question": "De 1918 à 1919, la grippe espagnole a causé la mort d'une centaine de millions d'individus. Pourquoi l'appelle-t-on la grippe 'espagnole' ?",
        "answer": "Car l'Espagne est le seul pays à ne pas avoir falsifié les chiffres et donc minimiser le nombre de morts.",
        "hint": " ",
      },
      {
        "id": "28",
        "question": "Quelle est l'origine du mot 'sniper' ?",
        "answer": "Sniper vient de 'snipe'. En français : 'la bécassine', un oiseau vif et difficile à chasser.",
        "hint": " ",
      },
      {
        "id": "29",
        "question": "Que mesure l'échelle de Scoville ?",
        "answer": "Elle classifie le piquant des piments.",
        "hint": "La classification tient de la teneur en capsaïcine des piments. Par exemple : 0 pour le poivron, 500 pour le paprika. Le piment le plus fort du monde atteint les 2 000 000.",
      },
      {
        "id": "30",
        "question": "Au XXème siècle, henri La Fontaine et Paul Otlet ont fondé un centre d'achivage appelé 'Mundaneum'. Quel était l'objectif de ce centre ?",
        "answer": "Archiver l'ensemble des publications humaines afin de résumer tout le savoir du monde.",
        "hint": "La mort de ces deux hommes, pendant la seconde guerre mondiale, a mis un terme à ce projet déjà bien avancé.",
      },
      {
        "id": "31",
        "question": "Après les concerts, la plus grosse source de revenu du groupe Aerosmith ne vient pas de la vente de ses albums. Alors de quoi ?",
        "answer": "Grâce aux droits d'auteur touchés sur les jeux 'Guitar Hero'.",
        "hint": "À l'époque, les groupes comme Aerosmith généraient surtout de l'argent avec leur représentation sur scène que la vente de disques.",
      },
      {
        "id": "32",
        "question": "En Arkansas se trouve un parc national unique au monde. Pourquoi attire-t-il les visiteurs du monde entier ?",
        "answer": "C'est la seule mine de diamandts ouverte au public.",
        "hint": "On dénombre plus de 30 000 diamants découverts depuis son ouverture en 1972.",
      },
      {
        "id": "33",
        "question": "Le Wombat est un marsupial qui vit en Australie. Comment s'y prend-il pour délimiter ton territoire ?",
        "answer": "Il y dispose des matières fécales carrées.",
        "hint": " ",
      },
      {
        "id": "34",
        "question": "Clara de la Rocha est une femme combattante de la révolution mexicaine du début du XXème siècle. Pourquoi ses cheveux sont-ils célèbres ?",
        "answer": "George Lucas s'en est inspiré pour créer la princesse Leia.",
        "hint": " ",
      },
      {
        "id": "35",
        "question": "Jusqu'en 2000, que pouvait-on observer depuis le ciel dans la fôret de pins de Brandebourg en Allemagne ?",
        "answer": "Un Svastiska ou 'croix gammée' de 3600 m².",
        "hint": "Dessinée en plantant des arbres d'une variété différente pendant les années 30, cette croix n'était visible qu'en automne. Elle n'a été découverte qu'en 1992.",
      },
      {
        "id": "36",
        "question": "La peste noire a causée la mort de 25 à 50 % de la population européenne. Quelle méthode inefficace était recommandée par les médecins pour se soigner ?",
        "answer": "La conception de potions à base de bave de crapaud, sang de vipère et excréments d'animaux.",
        "hint": "On recommandait aussi des saignées, l'abstinence, et les prières.",
      },
      {
        "id": "37",
        "question": "Qu'appele-t-on un 'roi-des-rats' ?",
        "answer": "Un ensemble de rats dont les queues se sont entremêlées les unes dans les autres.",
        "hint": "Ce noeud presque inexplicable est aussi causé par un mélange de paille, d'excréments séchés et de poils.",
      },
      {
        "id": "38",
        "question": "Quelle matière naturelle peut être utilisée pour réparer une fracture osseuse ?",
        "answer": "Le corail.",
        "hint": "Certaines variétés de coraux ont en effet une composition proche des os humains.",
      },
      {
        "id": "39",
        "question": "Au Danemark, quel rituel traditionnel est destiné aux gens qui ne sont pas encore mariés à 25 ans.",
        "answer": "Ils se font recouvrir de cannelle.",
        "hint": " ",
      },
      {
        "id": "40",
        "question": "En 1936, quelle méthode inhabituelle est utilisée par le proctologue Edwin Katsee pour étudier les effets de la cocaïne ?",
        "answer": "Il s'administre une énorme dose dans le corps qui le conduira à la mort.",
        "hint": "L'objectif de cette méthode était de noter les effets au fur et à mesure qu'il les ressentait",
      },
      {
        "id": "41",
        "question": "Pour quelle raison les gondoles de Venise sont-elles toutes peintes en noir ?",
        "answer": "Parce que c'est la loi.",
        "hint": "En 1952, un décret imposa la couleur afin d'empêcher les riches Vénitiens d'utiliser leur embarcation pour en faire un signe extérieur de richesse.",
      },
      {
        "id": "43",
        "question": "D'après une étude portée sur 14 ans et 25 millions de décés, quel est le jour de l'année où on a le plus de chance de mourir ?",
        "answer": "Le jour de son aniversaire.",
        "hint": " ",
      },
      {
        "id": "44",
        "question": "De puis 2016, Quelle est la particularité de la ville Ortona en Italie ?",
        "answer": "Une fontaine de vin coule 24/7",
        "hint": " ",
      },
      {
        "id": "45",
        "question": "A Cannes, quelle idée a trouvé un célèbre hôtel pour s'assurer que les célébrités ne soient pas dérangées pendant leur déjeuners ?",
        "answer": "Des buses et faucons chasseurs de mouettes et pigeons",
        "hint": " ",
      },
      {
        "id": "46",
        "question": "En 1945 dans l'empire state Building, Betty Lou Oliver entre dans le Guinness des records. Quel record a t elle battu ?",
        "answer": "Elle a survécu à la chute d'un ascenseur de 79 étage. ",
        "hint": "L'accident a été provoqué par le crash d'un bombardier lors d'une manoeuvre de routine.",
      },
      {
        "id": "47",
        "question": "Quel moyen de protestation a utilisé David Phyall pour protester la destruction de sa barre d'immeuble et le fait d'être relogé ?",
        "answer": "Il s'est suicidé avec une tronçonneuse",
        "hint": " ",
      },
      {
        "id": "48",
        "question": "Quel est le point commun entre un papillon et un écureuil ?",
        "answer": "Le nombre de poils, environ 3 millions",
        "hint": " ",
      },
      {
        "id": "49",
        "question": "Calle me flata un tornillo, traduisez : 'rue il me manque une vis', est une rue de Valladolid en Espagne. Qui a-t-il de drôle au bout de cette rue ?",
        "answer": "À cause de l'invasion de la Pologne par les forces Allemande.",
        "hint": "Il y a un magasin Ikea.",
      },
      {
        "id": "50",
        "question": "Kalsarikänni désigne une manière bien particulière de passer sa soirée pour les finlandais, laquelle ?",
        "answer": "Se bourrer la gueule, seul, chez soi en caleçon.",
        "hint": " ",
      },
      {
        "id": "51",
        "question": "Tout le monde connaît la phrase prononcée par Neil Armstrong pour avoir été le premier homme à avoir marché sur la lune. Qu'elle a été la première phrase prononcée par le second ?",
        "answer": "Belle vue.",
        "hint": " ",
      },
      {
        "id": "52",
        "question": "Pendant 4 ans, le zoo japonais S'approche Maruyama a tenté de faire s'accoupler deux hyènes sans succès. Pour qu'elle raison l'expérience a échouée ?",
        "answer": "C'était 2 mâles.",
        "hint": " ",
      },
      {
        "id": "53",
        "question": "Pourquoi le jeu 'Sens me touche heaven' a été retiré de l'App store ?",
        "answer": "Parce qu'il consistait à jeter son téléphone le plus haut dans les airs et ainsi détruire le plus d'Iphone.",
        "hint": " ",
      },
      {
        "id": "54",
        "question": "A la place d'Iroshima, Kyoto aurait dû être la première cible de l'attaque nucléaire des americains. Pourquoi le premier ministre Henry Lewis Stimson l'a retiré de la liste ?",
        "answer": "Parce qu'il en vaut gardé un bon souvenir pendant sa lune de miel",
        "hint": " ",
      },
      {
        "id": "55",
        "question": "Michael Jackson et Freddy Mercury travaillaient sur un album commun en 1980 mais n'est jamais sorti car les artistes ne s'entendaient pas. Que reprochait Freddy Mercury a Michael Jackson ?",
        "answer": "Il ne supportait pas son lama de compagnie dans le studio",
        "hint": " ",
      },
      {
        "id": "56",
        "question": "Quelle technique utilisée par des Russes et finlandais permettaient de conserver le lait avant l'invention du réfrgérateur ?",
        "answer": "En y plongeant des grenouilles vivantes",
        "hint": " ",
      },
      {
        "id": "57",
        "question": "La société SOLD créée par Robert Samuel à New York, propose un service pour vous simplifier la vie, lequel ?",
        "answer": "Faire la queue à votre place dans les files d'attente.",
        "hint": " ",
      },
      {
        "id": "58",
        "question": "Leonarda Cianculli est une tueuse en série Italienne connue dans les années 40.Quel traitement horrible faisait-elle des cadavres de ses victimes ?",
        "answer": "Elle en faisait du savon et des gâteaux.",
        "hint": "Elle les découpait en petit morceaux pour en faire du savon et se servait du sang pour en faire des gâteaux à distribuer au voisinage",
      },
      {
        "id": "59",
        "question": "Selon une étude de 2011, quel était le pays le plus heureux du monde ? ",
        "answer": "La Corée du Nord",
        "hint": "Le second était la Chine l'étude a été fait par des chercheurs coréen",
      },
      {
        "id": "60",
        "question": "En 2014 en Caroline du Nord des étudiants ont inventé un vernis à ongles très spécial. À quoi servait t-il ?",
        "answer": "À détecter les drogues dans les cocktails",
        "hint": " ",
      },
      {
        "id": "61",
        "question": "En l'espace de 3 semaines, une étonnante campagne  Kickstarter a permis de récolter 55000$. Quel était son objectif ?",
        "answer": "Financer la salade de pommes de terre dans un dénommé zac. Le nom de la campagne était potato salad",
        "hint": " ",
      },
      {
        "id": "62",
        "question": "Pour éviter de réécrire son article sur la physique atomique a cause de fautes de pronoms personnels (nous à la place de je), qu'elle idée a eu Jack hetherington ?",
        "answer": "Il a renommé son chat et a signé l'article avec lui comme coauteur.",
        "hint": " ",
      },
      {
        "id": "63",
        "question": "Qu'a déclaré Vladimir 1er lorsqu'il a choisit la chrétienté pour religion en Russie entre 980 et 1015 ?",
        "answer": "Boire c'est la joie des Russes, on ne peut pas vivre sans ce plaisir.",
        "hint": "Il devait en effet choisir entre la chrétienté et l'islam qui interdit la consommation d'alcool.",
      },
    ];
    this.shuffleCards(this.cards)
    this.storage.set("shuffled", this.cards);
    }

  setI() {
    this.i++;
    console.log("i = " + this.i)
    this.storage.set("i", this.i);
  }

  getI() {
      this.storage.get("i").then(i => {
      this.i = i;
      console.log("i = " + this.i);
  });
  }

  saveCards() {
    this.storage.set("i", this.i);
    this.storage.set("shuffled", this.cards);
  }

  loadSavedCards() {
    this.storage.get("shuffled").then(cards => {
      this.cards = cards;
      console.log("here are the saved cards " + this.cards);
    });
    this.getI();
  }


  saveIntroEndTrue() {
    this.introEnd = true;
    this.storage.set("introEnd", this.introEnd);
    console.log("la valeur de introEnd est " + this.introEnd);
  }
  saveIntroEndFalse() {
    this.introEnd = false;
    this.storage.set("introEnd", this.introEnd);
    console.log("la valeur de introEnd est " + this.introEnd);
  }

  start() {
    this.storage.get("i").then(i => {
      this.i = i;
      console.log("i = " + this.i);
     });
    console.log("la valeur de i est " + this.i);
    if (this.i == 0) {
      this.deleteStorage();
     }
    else {
      this.loadSavedCards();
    }
  }

 shuffleCards(cards) {
    var currentIndex = cards.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
    };
    console.log(this.cards);
  }
}