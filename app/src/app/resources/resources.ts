import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface ResearchPaper {
  title: string;
  author: string;
  journal: string;
  category: string;
  year: string;
  link: string;
  backup: string;
}

const PAPERS: ResearchPaper[] = [
  {
    title: 'Psychology and White Ethnocentrism',
    author: 'Professor Kevin MacDonald',
    category: 'Research',
    journal: 'The Occidental Quarterly',
    year: '2006',
    link: 'http://www.kevinmacdonald.net/WhiteEthnocentrism.pdf',
    backup: 'http://www.kevinmacdonald.net/WhiteEthnocentrism.pdf'
  },
  {
    title: 'The War on White Australia',
    author: 'Brenton Sanderson',
    category: 'Article',
    journal: 'Occidental Observer',
    year: '2012',
    link: '/assets/papers/TheWaronWhiteAustralia-BrentonSanderson.pdf',
    backup: '/assets/papers/TheWaronWhiteAustralia-BrentonSanderson.pdf'
  },
  {
    title: 'The White Australia Policy In Retrospect: Racism Or Realism?',
    author: 'Professor Andrew Fraser',
    category: 'Review',
    journal: 'The Occidental Quarterly',
    year: '2005',
    link: 'https://www.academia.edu/44978186/THE_WHITE_AUSTRALIA_POLICY_IN_RETROSPECT_RACISM_OR_REALISM',
    backup: '/assets/papers/THE_WHITE_AUSTRALIA_POLICY_IN_RETROSPECT.pdf'
  },
  {
    title: 'Demise Of The White Australia Policy',
    author: 'Dr Charles Fahey',
    category: 'Research',
    journal: '',
    year:  '',
    link: 'https://www.christianidentityaustralia.org/reads/Demise-Policy.pdf',
    backup: '/assets/papers/DemiseOfTheWhiteAustraliaPolicy.pdf'
  },
  {
    title: 'I Stand By White Australia',
    author: 'Arthur Calwell',
    category: 'Letter',
    journal: 'Australian Labor Party',
    year: '1949',
    link: '/assets/papers/ArthurCalwell-IStandByWhiteAustralia.pdf',
    backup: '/assets/papers/ArthurCalwell-IStandByWhiteAustralia.pdf'
  },
  {
    title: 'Aboriginal Cannibalism In Australia',
    author: '',
    category: 'Composition',
    journal: '',
    year: '',
    link: '/assets/papers/AboriginalCannibalismInAustralia.pdf',
    backup: '/assets/papers/AboriginalCannibalismInAustralia.pdf'
  },
  {
    title: 'Some Notes on Aboriginal Cannibalism',
    author: 'E. G. Heap',
    category: 'Research',
    journal: 'Queensland Heritage',
    year: '1967',
    link: 'https://www.textqueensland.com.au/item/article/02e44ec586af038cffc507238ef49f56',
    backup: '/assets/papers/SomeNotesonAboriginalCannibalism.pdf'
  },
  {
    title: 'Politics Essay: White Australia Policy',
    author: '',
    category: 'Article',
    journal: '',
    year: '',
    link: 'https://www.christianidentityaustralia.org/reads/White-Policy.pdf',
    backup: '/assets/papers/PoliticalEssayWhiteAustraliaPolicy.pdf'
  },
  {
    title: 'Rehabilitating (and Denaturing) the White Australia Policy',
    author: 'Professor Andrew Fraser',
    category: 'Article',
    journal: 'American Renaissance',
    year: '2005',
    link: 'https://www.academia.edu/44985804/Rehabilitating_and_Denaturing_the_White_Australia_Policy',
    backup: '/assets/papers/Rehabilitating_and_Denaturing_the_White.pdf'
  },
  {
    title: 'Wanted: More race realism, less moralistic fallacy',
    author: ' J. P. Rushton &  A. R. Jensen',
    category: 'Research',
    journal: 'American Psychological Association',
    year: '2005',
    link: 'https://www1.udel.edu/educ/gottfredson/30years/Rushton-Jensen-reply-to-commentaries-on-30years.pdf',
    backup: '/assets/papers/WANTED_MORE_RACE_REALISM_LESS_MORALISTIC_FALLACY.pdf'
  },
  {
    title: 'The bonobo genome compared with the chimpanzee and human genomes',
    author: 'Prüfer et al',
    category: 'Research',
    journal: 'Nature',
    year: '2012',
    link: 'https://www1.udel.edu/educ/gottfredson/30years/Rushton-Jensen-reply-to-commentaries-on-30years.pdf',
    backup: '/assets/papers/the_bonbo_genome_compared_with_human_genome.pdf'
  },
  {
    title: 'Patterns of intergroup contact in public spaces: micro-ecology of segregation in Australian communities',
    author: 'Priest et al',
    category: 'Research',
    journal: 'Societies',
    year: '2014',
    link: 'https://dro.deakin.edu.au/eserv/DU:30072938/paradies-patternsof-2014.pdf',
    backup: '/assets/papers/paradies-patternsof-2014.pdf'
  },
  {
    title: 'The evolution of ethnocentric behavior',
    author: 'R. Axelrod & R. A. Hammond',
    category: 'Research',
    journal: 'Midwest Political Science Convention',
    year: '2003',
    link: 'https://dro.deakin.edu.au/eserv/DU:30072938/paradies-patternsof-2014.pdf',
    backup: '/assets/papers/paradies-patternsof-2014.pdf'
  },
  {
    title: 'The (in)compatibility of diversity and sense of community',
    author: 'Z. P Neal & J. W. Neal',
    category: 'Research',
    journal: 'American Journal of Community Psychology',
    year: '2013',
    link: 'https://pubmed.ncbi.nlm.nih.gov/24198048/',
    backup: '/assets/papers/IncompatabilityofDiversityAndCommunity.pdf'
  },
  {
    title: 'Ethnic Diversity and Social Trust: A Narrative and Meta-Analytical Review',
    author: 'Dinesen et al',
    category: 'Review',
    journal: 'Annual Review of Political Science',
    year: '2020',
    link: 'https://doi.org/10.1146/annurev-polisci-052918-020708',
    backup: '/assets/papers/EthnicDiversityAndSocialTrust.pdf'
  },
  {
    title: 'Interracial Roommate Relationships: An Experimental Field Test of the Contact Hypothesis',
    author: 'N. J. Shook & R. H. Fazio',
    category: 'Research',
    journal: 'Psychological Science',
    year: '2008',
    link: 'https://doi.org/10.1111/j.1467-9280.2008.02147.x',
    backup: '/assets/papers/shook2008.pdf'
  },
  {
    title: 'On the Edge of Diversity: Bringing African Americans and Latinos Together in a Neighborhood Group',
    author: 'J. C. Berryhill & J. A. Linney',
    category: 'Research',
    journal: 'American Journal of Community Psychology',
    year: '2008',
    link: 'https://doi.org/10.1007/s10464-006-9012-0',
    backup: '/assets/papers/berryhill2006.pdf'
  },
  {
    title: 'Different level of population differentiation among human genes',
    author: 'D. Wu & Y. Zhang',
    category: 'Research',
    journal: 'BMC Evolutionary Biology',
    year: '2011',
    link: 'http://www.biomedcentral.com/1471-2148/11/16',
    backup: '/assets/papers/wu2011.pdf'
  },
  {
    title: 'The Gender-Equality Paradox in Science, Technology, Engineering, and Mathematics Education',
    author: 'G. Stoet & D. Geary',
    category: 'Research',
    journal: 'Psychological Science',
    year: '2018',
    link: 'http://doi.org/10.1177/0956797617741719',
    backup: '/assets/papers/stoet2018.pdf'
  },
  {
    title: 'The Dismantling of the White Australia Policy: Elite Conspiracy or Will of the Australian People?',
    author: 'Professor Gwenda Tavan',
    category: 'Article',
    journal: 'Australian Journal of Political Science',
    year: '2004',
    link: 'http://doi.org/10.1080/1036114042000205678',
    backup: '/assets/papers/tavan2004.pdf'
  },
  {
    title: 'One Nation Federal Policy Guide 2022',
    author: 'Pauline Hanson',
    category: 'Policy',
    journal: 'One Nation',
    year: '2022',
    link: '/assets/papers/OneNationPolicyGuide2022-compressed.pdf',
    backup: '/assets/papers/OneNationPolicyGuide2022-compressed.pdf'
  },
  {
    title: 'The Asianisation of Australia',
    author: 'Chris Anderson',
    category: 'Article',
    journal: 'Nationalist Publications',
    year: '1998',
    link: '/assets/papers/asianisation.pdf',
    backup: '/assets/papers/asianisation.pdf'
  },
  {
    title: 'Mass Immigration: Undermining Australia\'s Way of Life',
    author: 'Ryan T. Jones',
    category: 'Article',
    journal: 'Nationalist Publications',
    year: '1996',
    link: '/assets/papers/MassImmigration.pdf',
    backup: '/assets/papers/MassImmigration.pdf',
  },
  {
    title: 'Illegals, Overstayers and Unwelcome Guests',
    author: 'Dr Rodney Spencer',
    category: 'Article',
    journal: 'Nationalist Publications',
    year: '2001',
    link: '/assets/papers/IllegalsOverstayers.pdf',
    backup: '/assets/papers/IllegalsOverstayers.pdf'
  },
  {
    title: 'Keep White the Strain',
    author: '',
    category: 'Poetry',
    journal: 'Poetry',
    year: '1800\'s',
    link: '/assets/papers/KeepWhiteTheStrain.pdf',
    backup: '/assets/papers/KeepWhiteTheStrain.pdf'
  },
  {
    title: 'Chinese Immigration',
    author: 'Chas R. Thatcher',
    category: 'Poetry',
    journal: 'Poetry',
    year: '1857',
    link: '/assets/papers/ChineseImmigration.pdf',
    backup: '/assets/papers/ChineseImmigration.pdf'
  },
  {
    title: 'A Bushman\'s Song',
    author: 'Andrew "Banjo" Patterson',
    journal: 'Poetry',
    category: 'Poetry',
    year: '1892',
    link: '/assets/papers/BushmanSong.pdf',
    backup: '/assets/papers/BushmanSong.pdf'
  },
  {
    title: 'Freedom on the Wallaby',
    author: 'Henry Lawson',
    journal: 'Poetry',
    category: 'Poetry',
    year: '1891',
    link: '/assets/papers/FreedomOnTheWallaby.pdf',
    backup: '/assets/papers/FreedomOnTheWallaby.pdf'
  },
  {
    title: 'Chinese Emigration',
    author: 'George Chanson',
    journal: 'Poetry',
    category: 'Poetry',
    year: '1869',
    link: '/assets/papers/ChineseEmigration.pdf',
    backup: '/assets/papes/ChineseEmigration.pdf'
  },
  {
    title: 'The Song That Men Should Sing',
    author: 'Kenneth Mackay',
    journal: 'Poetry',
    category: 'Poetry',
    year: '1899',
    link: '/assets/papers/ASongMenShouldSing.pdf',
    backup: '/assets/papers/ASongMenShouldSing.pdf'
  },
  {
    title: 'Every Man Should Have A Rifle',
    author: 'Henry Lawson',
    journal: 'Poetry',
    category: 'Poetry',
    year: '1907',
    link: '/assets/papers/EveryManShouldHaveARifle.pdf',
    backup: '/assets/papers/EveryManShouldHaveARifle.pdf'
  },
  {
    title: 'The Real Words of Islam',
    author: 'Andrew Bolt',
    category: 'News',
    journal: 'Herald Sun',
    year: '2001',
    link: '/assets/papers/TheRealWordsOfIslam.pdf',
    backup: '/assets/papers/TheRealWordsOfIslam.pdf'
  },
  {
    title: 'Winning Conditions for Australian Nationalism',
    author: 'Graeme Campbell',
    category: 'Article',
    journal: '',
    year: '2001',
    link: '/assets/papers/WinningConditions.pdf',
    backup: '/assets/papesr/WinningConditions.pdf'
  },
  {
    title: 'The politics of race and immigration in Australia: One Nation voting in the 1998 Election',
    author: 'McAllister et al',
    category: 'Research',
    journal: 'Ethnic and Racial Studies',
    year: '2002',
    link: 'https://www.tandfonline.com/doi/abs/10.1080/0141987022000000286',
    backup: '/assets/papers/'
  },
  {
    title: 'We Only Want Those Prepared To Be Like Us',
    author: 'John Stone',
    category: 'Letter',
    journal: 'The Australian',
    year: '2001',
    link: '/assets/papers/WeOnlyWantThosePreparedToBeLikeUs.pdf',
    backup: '/assets/papers/WeOnlyWantThosePreparedToBeLikeUs.pdf'
  },
  {
    title: 'UK: Rising Gang Rapes of White Girls a Byproduct of Multiracialist Experiment',
    author: 'British Nationalist Party',
    category: 'Letter',
    journal: 'British Nationalist Party',
    year: '2004',
    link: '/assets/papers/UKGangRape.pdf',
    backup: '/assets/papers/UKGangRape.pdf'
  },
  {
    title: 'Multicultralist Lies',
    author: '',
    category: 'Article',
    journal: 'Nationalist Publications',
    year: '1998',
    link: '/assets/papers/MulticultralistLies.pdf',
    backup: '/assets/papers/MulticultralistLies.pdf'
  },
  {
    title: 'Eureka Stockade: Birth of the Australian National Idea',
    author: 'Brian Knight',
    category: 'Article',
    journal: 'Nationalist Publications',
    year: '1993',
    link: '/assets/papers/EurekaStockade.pdf',
    backup: '/assets/papers/EurekaStockade.pdf'
  },
  {
    title: 'Ethnic Block Voting',
    author: 'Dr Rodney Spencer',
    category: 'Article',
    journal: 'Australian Civil Liberties Union',
    year: '2004',
    link: '/assets/papers/EthnicBlockVoting.pdf',
    backup: '/assets/papers/EthnicBlockVoting.pdf'
  },
  {
    title: 'Australia\'s Peril',
    author: 'Henry Lawson',
    journal: 'Poetry',
    category: 'Poetry',
    year: '1905',
    link: '/assets/papers/AustraliasPeril.pdf',
    backup: '/assets/papers/AustraliasPeril.pdf'
  },
  {
    title: 'The Demise Of The White Australia Policy',
    author: 'Chris Anderson',
    category: 'Article',
    journal: 'Nationalist Publications',
    year: '1998',
    link: '/assets/papers/TheDemiseOfTheWhiteAustraliaPolicy.pdf',
    backup: '/assets/papers/TheDemiseOfTheWhiteAustraliaPolicy.pdf'
  },
  {
    title: 'Colony and Empire',
    author: 'Thomas Ross',
    category: 'Article',
    journal: 'Nationalist Publications',
    year: '1997',
    link: '/assets/papers/ColonyAndEmpire.pdf',
    backup: '/assets/papers/ColonyAndEmpire.pdf'
  },
  {
    title: 'The Fight For Australian Culture',
    author: 'Andrew Patterson',
    category: 'Article',
    journal: '',
    year: '',
    link: '/assets/papers/FightForAustralianCulture.pdf',
    backup: '/assets/papers/FightForAustralianCulture.pdf'
  },
  {
    title: 'The Menace of Multiculturalism',
    author: 'Cameron McKenzie',
    category: 'Article',
    journal: '',
    year: '1997',
    link: '/assets/papers/TheMenaceofMulticulturalism.pdf',
    backup: '/assets/papers/TheMenaceofMulticulturalism.pdf'
  },
  {
    title: 'Freedom Manifesto',
    author: 'Liberal Democrat Party',
    journal: '',
    category: 'Policy',
    year: '2022',
    link: '/assets/papers/LDPFreedomManifesto-compressed.pdf',
    backup: '/assets/papers/LDPFreedomManifesto-compressed.pdf'
  },
  {
    title: 'Voice of the People: The White Australia Policy',
    author: 'Four Corners',
    journal: 'ABC',
    category: 'Video',
    year: '1962',
    link: 'https://www.youtube.com/watch?v=6zb8yLammA0',
    backup: '/assets/videos/VoiceofthePeopleTheWhiteAustraliaPolicy1962.mp4'
  },
  {
    title: 'The White Australia Policy',
    author: 'Sir Robert Menzies',
    journal: 'Video',
    category: 'Video',
    year: '',
    link: 'https://www.youtube.com/watch?v=JhvmsV9bnxQ',
    backup: '/assets/videos/SirRobertMenziesontheWhiteAustraliaPolicy.mp4'
  },
  {
    title: 'The White Australia Policy',
    author: 'Alfred Deakin',
    journal: 'Image',
    category: 'Image',
    year: '1903',
    link: '/assets/images/WAP/AlfredDeakin.png',
    backup: '/assets/images/WAP/AlfredDeakin.png'
  },
  {
    title: 'The White Australia Policy',
    author: 'Andrew Fisher',
    journal: 'Image',
    category: 'Image',
    year: '1913',
    link: '/assets/images/WAP/AndrewFisher.png',
    backup: '/assest/images/WAP/AndrewFisher.png'
  },
  {
    title: 'The White Australia Policy',
    author: 'Professor Andrew Fraser',
    journal: 'Image',
    category: 'Image',
    year: '2005',
    link: '/assets/images/WAP/AndrewFraser.png',
    backup: '/assest/images/WAP/AndrewFraser.png'
  },
  {
    title: 'The White Australia Policy',
    author: 'Arthur Calwell',
    journal: 'Image',
    category: 'Image',
    year: '1972',
    link: '/assets/images/WAP/ArthurCalwell.jpg',
    backup: '/assets/images/WAP/ArthurCalwell.jpg'
  },
  {
    title: 'The White Australia Policy',
    author: 'Billy Hughes',
    journal: 'Image',
    category: 'Image',
    year: '1922',
    link: '/assets/images/WAP/BillyHughes.png',
    backup: '/assets/images/WAP/BillyHughes.png'
  },
  {
    title: 'Election Speech',
    author: 'Alfred Deakin',
    journal: 'Speeches',
    category: 'Speech',
    year: '1903',
    link: '/assets/papers/AlfredDeakinWhiteAustralia.pdf',
    backup: '/assets/papers/AlfredDeakinWhiteAustralia.pdf'
  },
  {
    title: 'The White Australia Policy',
    author: 'Fraser Anning',
    journal: 'Image',
    category: 'Image',
    year: '2018',
    link: '/assets/images/WAP/FraserAnning.png',
    backup: '/assets/images/WAP/FraserAnning.png'
  },
  {
    title: 'The White Australia Policy',
    author: 'Sir George Reid',
    journal: 'Image',
    category: 'Image',
    year: '1903',
    link: '/assets/images/WAP/GeorgeReid.png',
    backup: '/assets/images/WAP/GeorgeReid.png'
  },
  {
    title: 'The White Australia Policy',
    author: 'Herbert Evatt',
    journal: 'Image',
    category: 'Image',
    year: '1945',
    link: '/assets/images/WAP/HerbertEvatt.png',
    backup: '/assets/images/WAP/HerbertEvatt.png'
  },
  {
    title: 'The White Australia Policy',
    author: 'Jack Beasley',
    journal: 'Image',
    category: 'Image',
    year: '',
    link: '/assets/images/WAP/JackBeasley.png',
    backup: '/assets/images/WAP/JackBeasley.png'
  },
  // {
  //   title: 'Re-Thinking the White Australia Policy',
  //   author: 'A. P. Elkin',
  //   category: 'Article',
  //   journal: 'The Australian Quarterly',
  //   year: '1945',
  //   link: 'https://doi.org/10.2307/20631287',
  //   backup: '/assets/papers/elkin1945.pdf'
  // },
  {
    title: 'The White Australia Policy',
    author: 'James Ronald',
    category: 'Image',
    journal: 'Image',
    year: '1901',
    link: '/assets/images/WAP/JamesRonald.png',
    backup: '/assets/images/WAP/JamesRonald.png'
  },
  {
    title: 'The White Australia Policy',
    author: 'John Curtin',
    category: 'Image',
    journal: 'Image',
    year: '1942',
    link: '/assets/images/WAP/JohnCurtin.png',
    backup: '/assets/images/WAP/JohnCurtin.png'
  },
  {
    title: 'The White Australia Policy',
    author: 'Sir John Forrest',
    category: 'Image',
    journal: 'Image',
    year: '1898',
    link: '/assets/images/WAP/JohnForrest.png',
    backup: '/assets/images/WAP/JohnForrest.png'
  },
  {
    title: 'The White Australia Policy',
    author: 'Joseph Cook',
    category: 'Image',
    journal: 'Image',
    year: '1913',
    link: '/assets/images/WAP/JosephCook.png',
    backup: '/assets/images/WAP/JosephCook.png',
  },
  {
    title: 'Immigration',
    author: 'John Stone',
    category: 'Image',
    journal: 'Image',
    year: '1988',
    link: '/assets/images/WAP/JohnStone.png',
    backup: '/assets/images/WAP/JohnStone.png'
  },
  {
    title: 'Immigration',
    author: 'Ned Kelly',
    category: 'Image',
    journal: 'Image',
    year: '1879',
    link: '/assets/images/WAP/NedKelly.png',
    backup: '/assets/images/WAP/NedKelly.png'
  },
  {
    title: 'Multicultralism',
    author: 'Pauline Hanson',
    category: 'Image',
    journal: 'Image',
    year: '1996',
    link: '/assets/images/WAP/PaulineHanson.jpg',
    backup: '/assets/images/WAP/PaulineHanson.jpg'
  },
  {
    title: 'The White Australia Policy',
    author: 'Sir Edmund Barton',
    category: 'Image',
    journal: 'Image',
    year: '1901',
    link: '/assets/images/WAP/SirEdmundBarton.jpg',
    backup: '/assets/images/WAP/SirEdmundBarton.jpg'
  },
  {
    title: 'The White Australia Policy',
    author: 'Stanley Bruce',
    category: 'Image',
    journal: 'Image',
    year: '1925',
    link: '/assets/images/WAP/StanleyBruce.png',
    backup: '/assets/images/WAP/StanleyBruce.png'
  },
  {
    title: 'The White Australia Policy',
    author: 'Sir Robert Menzies',
    category: 'Image',
    journal: 'Image',
    year: '',
    link: '/assets/images/WAP/SirRobertMenzies.png',
    backup: '/assets/images/WAP/SirRobertMenzies.png'
  },
  {
    title: 'The White Australia Policy',
    author: 'Professor Sir William Keith Hancock',
    category: 'Image',
    journal: 'Image',
    year: '1930',
    link: '/assets/images/WAP/SirWilliamKeithHancock.png',
    backup: '/assets/images/WAP/SirWilliamKeithHancock.png'
  },
  {
    title: 'The White Australia Policy',
    author: 'John C Watson',
    category: 'Image',
    journal: 'Image',
    year: '1901',
    link: '/assets/images/WAP/JohnCWatson.png',
    backup: '/assets/images/WAP/JohnCWatson.png'
  },
  {
    title: 'The White Australia Policy',
    author: 'King O\'Malley',
    category: 'Image',
    journal: 'Image',
    year: '1901',
    link: '/assets/images/WAP/KingOMalley.png',
    backup: '/assets/images/WAP/KingOMalley.png'
  },
  {
    title: 'The White Australia Policy',
    author: 'Major-General Sir Gravile de Laune Ryrie',
    category: 'Image',
    journal: 'Images',
    year: '',
    link: '/assets/images/WAP/MajorGeneralGranvileRyrie.png',
    backup: '/assets/images/WAP/MajorGeneralGranvileRyrie.png'
  },
  {
    title: 'The White Australia Policy',
    author: 'James C. Stewart',
    category: 'Image',
    journal: 'Image',
    year: '1901',
    link: '/assets/images/WAP/JamesCStewart.png',
    backup: '/assets/images/WAP/JamesCStewart.png'
  },
  {
    title: 'The White Australia Policy',
    author: 'John Thomas Lang',
    category: 'Image',
    journal: 'Image',
    year: '1956',
    link: '/assets/images/WAP/JohnThomasLang.png',
    backup: '/assets/images/WAP/JohnThomasLang.png'
  },
  {
    title: 'The White Australia Policy',
    author: 'John MacDonald',
    category: 'Image',
    journal: 'Image',
    year: '1922',
    link: '/assets/images/WAP/JohnMacDonald.png',
    backup: '/assets/images/WAP/JohnMacDonald.png'
  },
  {
    title: 'The White Australia Policy',
    author: 'William Spence',
    category: 'Image',
    journal: 'Image',
    year: '',
    link: '/assets/images/WAP/WilliamSpence.png',
    backup: '/assets/images/WAP/WilliamSpence.png'
  },
  {
    title: 'Australia Must Stay White',
    author: 'Daily Mirror',
    category: 'News',
    journal: 'Daily Mirror',
    year: '1967',
    link: '/assets/images/WAP/WhiteAustraliaMustStay.jpg',
    backup: '/assets/images/WAP/WhiteAustraliaMustStay.jpg'
  },
  {
    title: 'Danger for Australia',
    author: 'Arthur Calwell',
    category: 'Policy',
    journal: 'Australian Labor Party',
    year: '',
    link: '/assets/papers/Danger-for-Australia-by-Arthur-Calwell.pdf',
    backup: '/assets/papers/Danger-for-Australia-by-Arthur-Calwell.pdf'
  },
  {
    title: 'Constiution of the Australia First Party',
    author: 'Australia First Party',
    category: 'Policy',
    journal: 'Policy',
    year: '2012',
    link: '/assets/papers/AustraliaFirstPartyConstitution.pdf',
    backup: '/assets/papers/AustraliaFirstPartyConstitution.pdf'
  },
  {
    title: 'The White Australia Policy',
    author: 'Graeme Campbell',
    category: 'Image',
    journal: 'Image',
    year: '',
    link: '/assets/images/WAP/GraemeCampbell.png',
    backup: '/assets/images/WAP/GraemeCampbell.png'
  },
  {
    title: 'The Liberal Party and its Satellites',
    author: 'Saleam et al',
    category: 'Opinion',
    journal: 'Australia First Party',
    year: '',
    link: '/assets/papers/LiberalPartySatellites.pdf',
    backup: '/assets/papers/LiberalPartySatellites.pdf'
  },
  {
    title: 'Low Fertility Preservation Utilization Among Transgender Youth',
    author: 'Nahata et al',
    category: 'Research',
    journal: 'Journal of Adolescent Health',
    year: '2017',
    link: 'http://dx.doi.org/10.1016/j.jadohealth.2016.12.012',
    backup: '/assets/papers/nahata2017.pdf'
  },
  {
    title: 'Long-Term Follow-Up of Transsexual Persons Undergoing Sex Reassignment Surgery: Cohort Study in Sweden',
    author: 'Dhejne et al',
    category: 'Research',
    journal: 'Plos One',
    year: '2011',
    link: 'https://doi.org/10.1371/journal.pone.0016885',
    backup: '/assets/papers/dhejne2011.pdf',
  },
  {
    title: 'Attachment Patterns and Complex Trauma in a Sample of Adults Diagnosed with Gender Dysphoria',
    author: 'Giovanardi et al',
    category: 'Research',
    year: '2018',
    journal: 'Frontiers in Psychology',
    link: 'https://doi.org/10.3389/fpsyg.2018.00060',
    backup: '/assets/papers/giovanardi2018.pdf'
  },
  {
    title: 'Transgender hysteria',
    author: 'Professor Dianna Kenny',
    category: 'Research',
    year: '',
    journal: '',
    link: '/assets/papers/TransgenderHysteria.pdf',
    // link: 'https://www.diannakenny.com.au/k-blog/itemlist/tag/Transgender%20hysteria.html',
    backup: '/assets/papers/TransgenderHysteria.pdf'
  },
  {
    title: 'Parent reports of adolescents and young adults perceived to show signs of a rapid onset of gender dysphoria',
    author: 'Professor Lisa Littman',
    category: 'Research',
    journal: 'Plos One',
    year: '2018',
    link: 'https://doi.org/10.1371/journal.pone.0202330',
    backup: '/assets/papers/littman2018.pdf'
  },
  {
    title: 'Transgenderism: A Pathogenic Meme',
    author: 'Professor Paul McHugh',
    category: 'Article',
    journal: 'Public Discourse',
    year: '2015',
    link: '/assets/papers/TransgenderismAPathogenicMeme.pdf',
    // link: 'https://www.thepublicdiscourse.com/2015/06/15145/',
    backup: '/assets/papers/TransgenderismAPathogenicMeme.pdf'
  },
  {
    title: 'Varied Reports of Adult Transgender Suicidality: Synthesizing and Describing the Peer-Reviewed and Gray Literature',
    author: 'Adams et al',
    category: 'Review',
    journal: 'Transgender Health',
    year: '2017',
    link: 'https://doi.org/10.1089/trgh.2016.0036',
    backup: '/assets/papers/adams2017.pdf'
  },
  {
    title: 'Increasing rates of people identifying as transgender presenting to Endocrine Services in the Wellington region',
    author: 'Delahunt et al',
    year: '2018',
    category: 'Research',
    journal: 'New Zealand Medical Journal',
    link: 'https://assets-global.website-files.com/5e332a62c703f653182faf47/5e332a62c703f632472fd421_Delahunt-FINAL.pdf',
    backup: '/assets/papers/delahunt2018.pdf'
  },
  {
    title: 'Why are so many females coming out as trans/non-binary?',
    author: 'Gender Health Query',
    year: '',
    category: 'Research',
    journal: 'Gender Health Query',
    link: '/assets/papers/WhyTransAndNonBinary.pdf',
    // link: 'https://www.genderhq.org/increase-trans-females-nonbinary-dysphoria',
    backup: '/assets/papers/WhyTransAndNonBinary.pdf'
  },
  {
    title: 'Two hundred "Six million Jews" allegations from 1900-1945',
    author: '',
    category: 'Composition',
    journal: '',
    year: '',
    link: '/assets/papers/6million.pdf',
    backup: '/assets/papers/6million.pdf'
  },
  {
    title: 'Sharia law for non-muslims',
    author: 'Dr Bill Warner',
    year: '2010',
    journal: 'Center for the study of political islam',
    category: 'Article',
    link: '/assets/papers/sharia.pdf',
    backup: '/assets/papers/sharia.pdf'
  },
  {
    title: 'THE BAD WAR: The Truth NEVER Taught About World War II',
    author: 'M. S. King',
    year: '2015',
    journal: 'Book',
    category: 'Book',
    link: 'https://nanomatic.fi/pdf/Badwar2.pdf',
    backup: '/assets/papers/Badwar2.pdf'
  },
  {
    title: 'The Subversion Of Australian Education',
    author: 'Marion Wallis',
    year: '1977',
    category: 'Book',
    journal: 'Book',
    link: 'https://ia803004.us.archive.org/28/items/TheSubversionOfAustralianEducationJMWallace197792pgsEDU.sml/The_Subversion_of_Australian_Education-JM_Wallace-1977-92pgs-EDU.sml.pdf',
    backup: '/assets/papers/TheSubversionOfAustralianEducation.pdf'
  },
  {
    title: 'Brain size, IQ, and racial-group differences: Evidence from musculoskeletal traits',
    author: 'J. P. Rushton & E. W. Rushton',
    category: 'Research',
    journal: 'Intelligence',
    year: '2003',
    link: 'https://doi.org/10.1016/S0160-2896(02)00137-X',
    backup: '/assets/papers/rushton2003'
  },
  {
    title: 'The International Jew',
    author: 'Henry Ford',
    category: 'Book',
    journal: 'Book',
    year: '1920\'s',
    link: '/assets/papers/TheInternationalJew.pdf',
    // link: 'https://archive.org/details/TheInternationalJewTheWorldsForemostProblemhenryFord1920s',
    backup: '/assets/papers/TheInternationalJew.pdf'
  },
  {
    title: 'A history of central banking and the enslavement of mankind',
    author: 'Stephen Mitford Goodson',
    category: 'Book',
    journal: 'Book',
    year: '2017',
    link: 'https://constitutionwatch.com.au/wp-content/uploads/A-History-of-Central-Banking-and-the-Enslavement-of-Mankind-Stephen-Mitford-Goodson.pdf',
    backup: '/assets/papers/A_History_of_Central_Banking_and_the_Enslavement_of_Mankind_Stephen.pdf'
  },
  {
    title: 'Dan Andrews Labor Government encourages 10 year old girls to learn about their fathers ejaculation',
    author: 'Victorian Parliament',
    category: 'Video',
    journal: 'Video',
    year: '2022',
    link: '/assets/videos/LaborSexEd.mp4',
    backup: '/assets/videos/LaborSexEd.mp4'
  },
  {
    title: 'What Makes Western Culture unique?',
    author: 'Professor Kevin MacDonald',
    category: 'Article',
    journal: 'The Occidental Quarterly',
    year: '2002',
    link: 'http://www.kevinmacdonald.net/TOQv2n2MacDonald.pdf',
    backup: '/assets/papers/WhatMakesWesternCultureUnique.pdf'
  },
  {
    title: 'The Evolution of Intelligence',
    author: 'Professor K. MacDonald & M. A. Woodley',
    category: 'Research',
    journal: 'Encyclopedia of Evolutionary Psychological Science',
    year: '2016',
    link: 'http://www.kevinmacdonald.net/EvolutionOfIntelligence.pdf',
    backup: '/assets/papers/EvolutionOfIntelligence.pdf'
  },
  {
    title: 'The Familial Origins of European Individualism',
    author: 'Professor Kevin MacDonald',
    category: 'Article',
    journal: 'Journal of Social, Political and Economic Studies',
    year: '2018',
    link: 'http://www.kevinmacdonald.net/Familial%20Origins-Final.pdf',
    backup: '/assets/papers/FamilialOrigins.pdf'
  },
  {
    title: 'Empire Is Essential To White Australia',
    author: 'Billy Hughes',
    category: 'Video',
    year: '1932',
    journal: 'Video',
    link: 'https://www.youtube.com/watch?v=UMtkrgi0JBM',
    backup: '/assets/videos/EmpireIsEssentialToWhiteAustralia.mp4'
  },
  {
    title: 'Australia for your Son\'s future (Free Immigration for British)',
    author: 'British Movietone News',
    year: '1950\'s',
    category: 'Video',
    journal: 'Video',
    link: 'https://www.youtube.com/watch?v=Bvd1-Lw2h1U',
    backup: '/assets/videos/AustraliaforyourSonsfuture.mp4'
  },
  {
    title: 'Declearation of War Speech',
    author: 'Robert Menzies',
    year: '1939',
    category: 'Video',
    journal: 'Video',
    link: 'https://www.youtube.com/watch?v=FZedhB6Olvk',
    backup: '/assets/videos/RobertMenziesspeech1939DeclarationofWar.mp4'
  },
  {
    title: 'If This Be Treason',
    author: 'Ian Mudie',
    year: '1940',
    category: 'Poetry',
    journal: 'Poetry',
    link: '/assets/papers/IfThisBeTreason.pdf',
    backup: '/assets/papers/IfThisBeTreason.pdf'
  },
  {
    title: 'Advance Australia Fair [Original]',
    author: 'Peter Dodds McCormick',
    year: '1878',
    category: 'Music',
    journal: 'Music',
    link: 'https://www.youtube.com/watch?v=xTaw6oQmRdM',
    backup: '/assets/music/AdvanceAustraliaFairOriginal.mp4'
  },
  {
    title: 'God Bless Australia',
    author: 'Jack O\'Hagan',
    year: '1961',
    category: 'Music',
    journal: 'Music',
    link: 'https://www.youtube.com/watch?v=p6ZRKxen3do',
    backup: '/assets/music/GodBlessAustralia.mp4'
  },
  {
    title: 'I was only nineteen',
    author: 'Redgum',
    year: '1983',
    category: 'Music',
    journal: 'Music',
    link: 'https://www.youtube.com/watch?v=OKZOD6oxamo',
    backup: '/assets/music/'
  },
  {
    title: 'Black Thursday bushfires in Victoria (Feb 6 1851)',
    author: 'William Strutt',
    year: '1864',
    category: 'Artwork',
    journal: 'Artwork',
    link: '/assets/images/art/BlackThursday.jpeg',
    backup: '/assets/images/art/BlackThursday.jpeg'
  },
  {
    title: 'The Opening of the First Parliament of the Commonwealth of Australia',
    author: 'Tom Roberts',
    year: '1903',
    category: 'Artwork',
    journal: 'Artwork',
    link: '/assets/images/art/BigPicture.jpg',
    backup: '/assets/images/art/BigPicture.jpg'
  },
  {
    title: 'The Duke of Cornwall and York opening the First Commonwealth Parliament of Australia (May 9th 1901)',
    author: 'Charles Nutall',
    year: '1902',
    category: 'Artwork',
    journal: 'Artwork',
    link: '/assets/images/art/NutallOpening.jpg', // NutallOpeningBlack.jpg
    backup: '/assets/images/art/NutallOpening.jpg'
  },
  {
    title: 'Aboriginal children \'in rape crisis\'',
    author: 'The Sydney Morning Herald',
    year: '2006',
    category: 'News',
    journal: 'News',
    link: '/assets/papers/AboriginalChildrenInRapeCrisis.pdf',
    backup: '/assets/papers/AboriginalChildrenInRapeCrisis.pdf'
  },
  {
    title: 'WESTERN FEMINISTS IGNORE “ABORIGINAL RAPE CULTURE”',
    author: 'AdvanceAustralia.org.au',
    category: 'Article',
    journal: 'AdvanceAustralia',
    year: '',
    link: '/assets/papers/WesternFeministsIgnoreAboriginalRape.pdf',
    backup: '/assets/papers/WesternFeministsIgnoreAboriginalRape.pdf'
  },
  {
    title: 'Four part series on Aboriginal communities',
    author: 'Tony Thomas',
    category: 'Article',
    journal: 'Bennelong Papers',
    year: '2013',
    link: '/assets/papers/AboriginalCommunities.pdf',
    backup: '/assets/papers/AboriginalCommunities.pdf'
  },
  {
    title: 'Waltzing Matilda',
    author: 'Andrew "Banjo" Patterson',
    year: '1895',
    category: 'Music',
    journal: 'Music',
    link: 'https://www.youtube.com/watch?v=FqtttbbYfSM',
    backup: '/assets/music/WaltzingMatilda.m4a'
  },
  {
    title: 'Bushranger Ned Kelly',
    author: 'Sidney Nolan',
    year: '1946',
    category: 'Artwork',
    journal: 'Artwork',
    link: '/assets/images/art/NedKelly1946.jpg',
    backup: '/assets/images/art/NedKelly1946.jpg'
  },
  {
    title: 'The founding of Australia',
    author: 'Captain Arthur Phillip',
    year: '1937',
    category: 'Artwork',
    journal: 'Artwork',
    link: '/assets/images/art/Australia_Day_Sydney_Cove.jpg',
    backup: '/assets/images/art/Australia_Day_Sydney_Cove.jpg'
  },
  {
    title: 'Minnesota transracial adoption study',
    author: 'S. Scarr & R. A. Weinberg',
    year: '1976',
    category: 'Research',
    journal: 'American Psychologist',
    link: 'https://doi.org/10.1037/0003-066X.31.10.726',
    backup: '/assets/papers/scarr1976.pdf'
  },
  {
    title: 'Look at life: Immigration to Australia in the 1950\'s',
    author: 'The Rank Organisation',
    year: '1960\'s',
    category: 'Video',
    journal: 'Video',
    link: 'https://www.youtube.com/watch?v=8MzGR4OJmGE',
    backup: '/assets/videos/LookatLifeImmigrationtoAustralia1950s.mp4'
  },
  {
    title: 'White Australia Policy Song',
    author: 'W. E. Naunton &  H. J. W. Gyles',
    year: '1910',
    category: 'Music',
    journal: 'Music',
    link: 'https://www.youtube.com/watch?v=TiSTEpKtGOQ',
    backup: '/assets/videos/WhiteAustraliaPolicySong.mp4'
  },
  {
    title: 'Australia\'s Constitution of 1901 with Amendments through 1985',
    author: 'constituteproject.org',
    year: '1901',
    category: 'Policy',
    journal: 'Policy',
    link: 'https://www.constituteproject.org/constitution/Australia_1985.pdf?lang=en',
    backup: '/assets/papers/Australia_1985.pdf'
  },
  {
    title: 'An assessment of intellectual disability among Aboriginal Australians',
    author: 'Glasson et al',
    year: '2005',
    category: 'Research',
    journal: 'Journla of Intellectual Disability Research',
    link: 'https://doi.org/10.1111/j.1365-2788.2005.00722.x',
    backup: '/assets/papers/glasson2005.pdf'
  },
  {
    title: 'The Geography of Intelligence',
    author: 'Richard Lynn',
    year: '2003',
    category: 'Research',
    journal: 'The Scientific Study of General Intelligence',
    link: 'https://doi.org/10.1016/B978-008043793-4/50045-3',
    backup: '/assets/papers/lyn2003.pdf'
  },
  {
    title: 'Ninety Two Percent: examining birth trends, family structure, economic standing, paternal relationships, and emotional stability of biracial children with African American fathers',
    author: 'Tiffany Calloway',
    year: '2015',
    category: 'Research',
    journal: 'SSRN Electronic Journal',
    link: 'https://www.researchgate.net/publication/315367933_Ninety_Two_Percent_Examining_the_Birth_Trends_Family_Structure_Economic_Standing_Paternal_Relationships_and_Emotional_Stability_of_Biracial_Children_with_African_American_Fathers',
    backup: '/assets/papers/ninetytwopercent.pdf'
  },
  {
    title: 'Mark Leibler: Powerbroker for Australia\'s Jewish Plutocracy',
    author: 'Brenton Sanderson',
    category: 'Article',
    journal: 'Occidental Observer',
    year: '2020',
    link: '/assets/papers/MARK_LEIBLER_BRENTON_SANDERSON.pdf',
    backup: '/assets/papers/MARK_LEIBLER_BRENTON_SANDERSON.pdf'
  },
  {
    title: 'Genetic and Environmental Influences on Individual Differences in Attitudes Toward Homosexuality: An Australian Twin Study',
    author: 'Verweij et al',
    year: '2008',
    journal: 'Springer Open Choice',
    category: 'Research',
    link: 'https://doi.org/10.1007/s10519-008-9200-9',
    backup: '/assets/papers/verweij2008.pdf'
  },
  {
    title: 'What is Islams view on concubines',
    author: 'Ex-muslims of North America',
    year: '2020',
    journal: 'Exmuslims',
    category: 'Video',
    link: '/assets/videos/islamconcubines.mp4',
    backup: '/assets/videos/islamconcubines.mp4'
  },
  {
    title: 'What is Islams view on marital consent',
    author: 'Ex-muslims of North America',
    year: '2020',
    journal: 'Exmuslims',
    category: 'Video',
    link: '/assets/videos/islammartialconsent.mp4',
    backup: '/assets/videos/islammartialconsent.mp4'
  },
  {
    title: 'Swedish rape offenders - a latent class analysis',
    author: 'Professor Khoshnood et al',
    year: '2021',
    category: 'Research',
    journal: 'Forensic Sciences Research',
    link: 'https://doi.org/10.1080/20961790.2020.1868681',
    backup: '/assets/papers/khoshnood2021.pdf'
  },
  {
    title: 'The Jewish Century: Chilling Story of Churchill and the Jews',
    author: 'The Christian Solution',
    year: '2009',
    category: 'Article',
    journal: 'The Christian Solution',
    link: '/assets/papers/jewishcentury.pdf',
    backup: '/assets/papers/jewishcentury.pdf'
  },
  {
    title: 'The White Australia Policy',
    author: 'George W. Holland',
    year: '1933',
    category: 'Image',
    journal: 'Image',
    link: '/assets/images/WAP/GeorgeHolland.png',
    backup: '/assets/images/WAP/GeorgeHolland.png'
  },
  {
    title: 'The White Australia Policy',
    author: 'Colonel Burford Sampson',
    year: '1928',
    category: 'Image',
    journal: 'Image',
    link: '/assets/images/WAP/BurfordSampson.png',
    backup: '/assets/images/WAP/BurfordSampson.png'
  },
  {
    title: 'Australian Labor Party committed to the Socialist International Alliance',
    year: '1991',
    author: 'Jeremy Lee',
    category: 'Video',
    journal: 'Video',
    link: '/assets/videos/SocialistInternationalAlliance.mp4',
    backup: '/assets/videos/SocialistInternationalAlliance.mp4'
  },
  {
    title: 'Australian Department of Health can\'t define what a woman is',
    author: 'Senator Alex Antic',
    year: '2022',
    category: 'Video',
    journal: 'Video',
    link: '/assets/videos/SenatorAnticWhatIsAWoman.mp4',
    backup: '/assets/videos/SenatorAnticWhatIsAWoman.mp4'
  },
  {
    title: 'Australia 2000 - What will we tell our children',
    author: 'Jeremy Lee',
    category: 'Book',
    journal: 'Book',
    year: '1997',
    link: '/assets/papers/Australia2000WhatWillWeTellOurChildren.pdf',
    backup: '/assets/papers/Australia2000WhatWillWeTellOurChildren.pdf'
  },
  {
    title: 'Why is ethnocentrism more common than humanitarianism',
    author: 'Professor Shultz et al',
    year: '2009',
    category: 'Research',
    journal: 'Cognitive Science Society',
    link: '/assets/papers/shultz2009.pdf',
    backup: '/assets/papers/shultz2009.pdf'
  },
  {
    title: 'The color of crime',
    author: 'Edwin S. Rubenstein',
    year: '2005',
    category: 'Research',
    journal: 'New Century Foundation',
    link: 'https://www.amren.com/wp-content/uploads/2011/12/2005-Color-of-Crime-Report.pdf',
    backup: '/assets/papers/2005-Color-of-Crime-Report.pdf'
  },
  {
    title: 'Swearing allegience to the Southern Cross (Eureka Stockade)',
    author: 'Charles A. Doudiet',
    year: '1854',
    category: 'Artwork',
    journal: 'Artwork',
    link: '/assets/images/art/eurkea_stockade.jpg',
    backup: '/assets/images/art/eureka_stockade.jpg'
  },
  {
    title: 'The voice of the Australian flag',
    author: 'John Downes',
    year: '1991',
    category: 'Video',
    journal: 'Video',
    link: 'https://www.youtube.com/watch?v=z-d_bqX7Ggk',
    backup: '/assets/videos/TheVoiceofAustralianflag.mp4'
  },
  {
    title: 'White Australia saved Australia',
    author: 'John Thomas Lang',
    year: '1956',
    category: 'Article',
    journal: 'Article',
    link: '/assets/papers/whiteaustraliasavedaustralia.pdf',
    backup: '/assets/papers/whiteaustraliasavedaustralia.pdf'
  },
  {
    title: 'Chinese immigration restriction',
    author: 'Sir Henry Parkes',
    year: '1880\'s',
    category: 'Image',
    journal: 'Image',
    link: '/assets/images/WAP/HenryParkes.png',
    backup: '/assets/images/WAP/HenryParkes.png'
  },
  {
    title: 'Chinese immigration restriction',
    author: 'Sir Samuel Griffith',
    year: '1887',
    category: 'Image',
    journal: 'Image',
    link: '/assets/images/WAP/SirSamuelGriffith.png',
    backup: '/assets/images/WAP/SirSamuelGriffith.png'
  },
  {
    title: 'An Australian Law Professor Suggests That Huntington Book Is Still Part of the Problem',
    author: 'Professor Andrew Fraser',
    year: '2004',
    category: 'Review',
    journal: 'VDare',
    link: '/assets/papers/An_Australian_Law_Professor_Suggests_Tha.pdf',
    backup: '/assets/papers/An_Australian_Law_Professor_Suggests_Tha.pdf'
  },
  {
    title: 'Australians Fight On The Beaches (Cronulla Riots)',
    author: 'Professor Andrew Fraser',
    year: '2005',
    category: 'Opinion',
    journal: 'VDare',
    link: '/assets/papers/DiversityvsFreedom.pdf',
    backup: '/assets/papers/DiversityvsFreedom.pdf'
  },
  {
    title: 'Review of Mark Lopez, The Origins of Multiculturalism in Australian Politics 1945-1975',
    author: 'Professor Katharine Betts',
    year: '2000',
    category: 'Review',
    journal: 'People and Place',
    link: '/assets/papers/mark-lopez-betts.pdf',
    backup: '/assets/papers/mark-lopez-betts.pdf'
  },
  {
    title: 'Immigration and public opinion in Australia: how public concerns about high migration are suppressed',
    author: 'Professor Katharine Betts',
    year: '2018',
    category: 'Research',
    journal: 'The Australian Population Research Institute',
    link: '/assets/papers/Immigration-public-opinion-2018.pdf',
    backup: '/assets/papers/Immigration-public-opinion-2018.pdf'
  },
  {
    title: 'Australia',
    author: 'Professor Sir William Keith Hancock',
    year: '1931',
    category: 'Book',
    journal: 'Ernest Benn Limited',
    link: '/assets/papers/Australia_compressed.pdf',
    backup: '/assets/papers/Australia_compressed.pdf'
  },
  {
    title: 'Comparing the Developmental Genetics of Cognition and Personality over the Lifespan',
    author: 'Professor Daniel A. Briley & Professor Elliot M. Tucker-Drob',
    year: '2017',
    category: 'Research',
    journal: 'Journal of personality',
    link: 'https://doi.org/10.1111/jopy.12186',
    backup: '/assets/papers/nihms-699196.pdf'
  },
  {
    title: 'Remember you\'re Australian',
    author: '',
    year: '',
    category: 'Video',
    journal: '',
    link: '/assets/videos/youreaustralian.mp4',
    backup: '/assets/videos/youreaustralian.mp4',
  }
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'resources',
  styleUrls: ['resources.scss'],
  templateUrl: 'resources.html',
})
export class ResourcesComponent implements AfterViewInit {
  public displayedColumns: string[] = ['title', 'author', 'category', 'year'];
  public dataSource: MatTableDataSource<ResearchPaper>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(PAPERS);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(document.querySelector('th.author')?.children[0]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  clickEvent(data: any) {
    window.open(data.link);
  }
}