import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface ResearchPaper {
  title: string;
  author: string;
  journal: string;
  year: string;
  link: string;
  backup: string;
}

const PAPERS: ResearchPaper[] = [
  {
    title: 'Psychology and White Ethnocentrism',
    author: 'Kevin MacDonald',
    journal: 'The Occidental Quarterly',
    year: '2006',
    link: 'http://www.kevinmacdonald.net/WhiteEthnocentrism.pdf',
    backup: 'http://www.kevinmacdonald.net/WhiteEthnocentrism.pdf'
  },
  {
    title: 'The War on White Australia',
    author: 'Brenton Sanderson',
    journal: 'Occidental Observer',
    year: '2012',
    link: '/assets/papers/TheWaronWhiteAustralia-BrentonSanderson.pdf',
    backup: '/assets/papers/TheWaronWhiteAustralia-BrentonSanderson.pdf'
  },
  {
    title: 'The White Australia Policy In Retrospect: Racism Or Realism?',
    author: 'Andrew Fraser',
    journal: 'The Occidental Quarterly',
    year: '2005',
    link: 'https://www.academia.edu/44978186/THE_WHITE_AUSTRALIA_POLICY_IN_RETROSPECT_RACISM_OR_REALISM',
    backup: '/assets/papers/THE_WHITE_AUSTRALIA_POLICY_IN_RETROSPECT.pdf'
  },
  {
    title: 'Demise Of The White Australia Policy',
    journal: '-',
    author: 'Dr Charles Fahey',
    year:  '-',
    link: 'https://www.christianidentityaustralia.org/reads/Demise-Policy.pdf',
    backup: '/assets/papers/DemiseOfTheWhiteAustraliaPolicy.pdf'
  },
  {
    title: 'I Stand By White Australia',
    author: 'Arthur Calwell',
    journal: 'Australian Labor Party',
    year: '1949',
    link: '/assets/papers/ArthurCalwell-IStandByWhiteAustralia.pdf',
    backup: '/assets/papers/ArthurCalwell-IStandByWhiteAustralia.pdf'
  },
  {
    title: 'Aboriginal Cannibalism In Australia',
    author: '-',
    journal: '-',
    year: '-',
    link: '/assets/papers/AboriginalCannibalismInAustralia.pdf',
    backup: '/assets/papers/AboriginalCannibalismInAustralia.pdf'
  },
  {
    title: 'Some Notes on Aboriginal Cannibalism',
    author: 'E. G. Heap',
    journal: 'Queensland Heritage',
    year: '1967',
    link: 'https://www.textqueensland.com.au/item/article/02e44ec586af038cffc507238ef49f56',
    backup: '/assets/papers/SomeNotesonAboriginalCannibalism.pdf'
  },
  {
    title: 'Politics Essay: White Australia Policy',
    author: '-',
    journal: '-',
    year: '-',
    link: 'https://www.christianidentityaustralia.org/reads/White-Policy.pdf',
    backup: '/assets/papers/PoliticalEssayWhiteAustraliaPolicy.pdf'
  },
  {
    title: 'Rehabilitating (and Denaturing) the White Australia Policy',
    author: 'Andrew Fraser',
    journal: 'American Renaissance',
    year: '2005',
    link: 'https://www.academia.edu/44985804/Rehabilitating_and_Denaturing_the_White_Australia_Policy',
    backup: '/assets/papers/Rehabilitating_and_Denaturing_the_White.pdf'
  },
  {
    title: 'Wanted: More race realism, less moralistic fallacy',
    author: ' J. P. Rushton &  A. R. Jensen',
    journal: 'American Psychological Association',
    year: '2005',
    link: 'https://www1.udel.edu/educ/gottfredson/30years/Rushton-Jensen-reply-to-commentaries-on-30years.pdf',
    backup: '/assets/papers/WANTED_MORE_RACE_REALISM_LESS_MORALISTIC_FALLACY.pdf'
  },
  {
    title: 'The bonobo genome compared with the chimpanzee and human genomes',
    author: 'Prüfer et al',
    journal: 'Nature',
    year: '2012',
    link: 'https://www1.udel.edu/educ/gottfredson/30years/Rushton-Jensen-reply-to-commentaries-on-30years.pdf',
    backup: '/assets/papers/the_bonbo_genome_compared_with_human_genome.pdf'
  },
  {
    title: 'Patterns of intergroup contact in public spaces: micro-ecology of segregation in Australian communities',
    author: 'Priest et al',
    journal: 'Societies',
    year: '2014',
    link: 'https://dro.deakin.edu.au/eserv/DU:30072938/paradies-patternsof-2014.pdf',
    backup: '/assets/papers/paradies-patternsof-2014.pdf'
  },
  {
    title: 'The evolution of ethnocentric behavior',
    author: 'R. Axelrod & R. A. Hammond',
    journal: 'Midwest Political Science Convention',
    year: '2003',
    link: 'https://dro.deakin.edu.au/eserv/DU:30072938/paradies-patternsof-2014.pdf',
    backup: '/assets/papers/paradies-patternsof-2014.pdf'
  },
  {
    title: 'The (in)compatibility of diversity and sense of community',
    author: 'Z. P Neal & J. W. Neal',
    journal: 'American Journal of Community Psychology',
    year: '2013',
    link: 'https://pubmed.ncbi.nlm.nih.gov/24198048/',
    backup: '/assets/papers/IncompatabilityofDiversityAndCommunity.pdf'
  },
  {
    title: 'Ethnic Diversity and Social Trust: A Narrative and Meta-Analytical Review',
    author: 'Dinesen et al',
    journal: 'Annual Review of Political Science',
    year: '2020',
    link: 'https://doi.org/10.1146/annurev-polisci-052918-020708',
    backup: '/assets/papers/EthnicDiversityAndSocialTrust.pdf'
  },
  {
    title: 'Interracial Roommate Relationships: An Experimental Field Test of the Contact Hypothesis',
    author: 'N. J. Shook & R. H. Fazio',
    journal: 'Psychological Science',
    year: '2008',
    link: 'https://doi.org/10.1111/j.1467-9280.2008.02147.x',
    backup: '/assets/papers/shook2008.pdf'
  },
  {
    title: 'On the Edge of Diversity: Bringing African Americans and Latinos Together in a Neighborhood Group',
    author: 'J. C. Berryhill & J. A. Linney',
    journal: 'American Journal of Community Psychology',
    year: '2008',
    link: 'https://doi.org/10.1007/s10464-006-9012-0',
    backup: '/assets/papers/berryhill2006.pdf'
  },
  {
    title: 'Different level of population differentiation among human genes',
    author: 'D. Wu & Y. Zhang',
    journal: 'BMC Evolutionary Biology',
    year: '2011',
    link: 'http://www.biomedcentral.com/1471-2148/11/16',
    backup: '/assets/papers/wu2011.pdf'
  },
  {
    title: 'The Gender-Equality Paradox in Science, Technology, Engineering, and Mathematics Education',
    author: 'G. Stoet & D. Geary',
    journal: 'Psychological Science',
    year: '2018',
    link: 'http://doi.org/10.1177/0956797617741719',
    backup: '/assets/papers/stoet2018.pdf'
  },
  {
    title: 'The Dismantling of the White Australia Policy: Elite Conspiracy or Will of the Australian People?',
    author: 'Gwenda Tavan',
    journal: 'Australian Journal of Political Science',
    year: '2004',
    link: 'http://doi.org/10.1080/1036114042000205678',
    backup: '/assets/papers/tavan2004.pdf'
  },
  {
    title: 'One Nation Federal Policy Guide 2022',
    author: 'Pauline Hanson',
    journal: 'One Nation',
    year: '2022',
    link: '/assets/papers/OneNationPolicyGuide2022-compressed.pdf',
    backup: '/assets/papers/OneNationPolicyGuide2022-compressed.pdf'
  },
  {
    title: 'The Asianisation of Australia',
    author: 'Chris Anderson',
    journal: 'Nationalist Publications',
    year: '1998',
    link: '/assets/papers/TheAsianisationOfAustralia.pdf',
    backup: '/assets/papers/TheAsianisationOfAustralia.pdf'
  },
  {
    title: 'Mass Immigration: Undermining Australia\'s Way of Life',
    author: 'Ryan T. Jones',
    journal: 'Nationalist Publications',
    year: '1996',
    link: '/assets/papers/MassImmigration.pdf',
    backup: '/assets/papers/MassImmigration.pdf',
  },
  {
    title: 'Illegals, Overstayers and Unwelcome Guests',
    author: 'Dr Rodney Spencer',
    journal: 'Nationalist Publications',
    year: '2001',
    link: '/assets/papers/IllegalsOverstayers.pdf',
    backup: '/assets/papers/IllegalsOverstayers.pdf'
  },
  {
    title: 'Keep White the Strain',
    author: '-',
    journal: 'Poetry',
    year: '1800\'s',
    link: '/assets/papers/KeepWhiteTheStrain.pdf',
    backup: '/assets/papers/KeepWhiteTheStrain.pdf'
  },
  {
    title: 'Chinese Immigration',
    author: 'Chas R. Thatcher',
    journal: 'Poetry',
    year: '1857',
    link: '/assets/papers/ChineseImmigration.pdf',
    backup: '/assets/papers/ChineseImmigration.pdf'
  },
  {
    title: 'A Bushman\'s Song',
    author: 'Andrew "Banjo" Patterson',
    journal: 'Poetry',
    year: '1892',
    link: '/assets/papers/BushmanSong.pdf',
    backup: '/assets/papers/BushmanSong.pdf'
  },
  {
    title: 'Freedom on the Wallaby',
    author: 'Henry Lawson',
    journal: 'Poetry',
    year: '1891',
    link: '/assets/papers/FreedomOnTheWallaby.pdf',
    backup: '/assets/papers/FreedomOnTheWallaby.pdf'
  },
  {
    title: 'Chinese Emigration',
    author: 'George Chanson',
    journal: 'Poetry',
    year: '1869',
    link: '/assets/papers/ChineseEmigration.pdf',
    backup: '/assets/papes/ChineseEmigration.pdf'
  },
  {
    title: 'The Song That Men Should Sing',
    author: 'Kenneth Mackay',
    journal: 'Poetry',
    year: '1899',
    link: '/assets/papers/ASongMenShouldSing.pdf',
    backup: '/assets/papers/ASongMenShouldSing.pdf'
  },
  {
    title: 'Every Man Should Have A Rifle',
    author: 'Henry Lawson',
    journal: 'Poetry',
    year: '1907',
    link: '/assets/papers/EveryManShouldHaveARifle.pdf',
    backup: '/assets/papers/EveryManShouldHaveARifle.pdf'
  },
  {
    title: 'The Real Words of Islam',
    author: 'Andrew Bolt',
    journal: 'Herald Sun',
    year: '2001',
    link: '/assets/papers/TheRealWordsOfIslam.pdf',
    backup: '/assets/papers/TheRealWordsOfIslam.pdf'
  },
  {
    title: 'Winning Conditions for Australian Nationalism',
    author: 'Graema Campbell',
    journal: '',
    year: '2001',
    link: '/assets/papers/WinningConditions.pdf',
    backup: '/assets/papesr/WinningConditions.pdf'
  },
  {
    title: 'The politics of race and immigration in Australia: One Nation voting in the 1998 Election',
    author: 'McAllister et al',
    journal: 'Ethnic and Racial Studies',
    year: '2002',
    link: 'https://www.tandfonline.com/doi/abs/10.1080/0141987022000000286',
    backup: '/assets/papers/'
  },
  {
    title: 'We Only Want Those Prepared To Be Like Us',
    author: 'John Stone',
    journal: 'The Australian',
    year: '2001',
    link: '/assets/papers/WeOnlyWantThosePreparedToBeLikeUs.pdf',
    backup: '/assets/papers/WeOnlyWantThosePreparedToBeLikeUs.pdf'
  },
  {
    title: 'UK: Rising Gang Rapes of White Girls a Byproduct of Multiracialist Experiment',
    author: '-',
    journal: 'British Nationalist Party',
    year: '2004',
    link: '/assets/papers/UKGangRape.pdf',
    backup: '/assets/papers/UKGangRape.pdf'
  },
  {
    title: 'Multicultralist Lies',
    author: '-',
    journal: 'Nationalist Publications',
    year: '1998',
    link: '/assets/papers/MulticultralistLies.pdf',
    backup: '/assets/papers/MulticultralistLies.pdf'
  },
  {
    title: 'Eureka Stockade: Birth of the Australian National Idea',
    author: 'Brian Knight',
    journal: 'Nationalist Publications',
    year: '1993',
    link: '/assets/papers/EurekaStockade.pdf',
    backup: '/assets/papers/EurekaStockade.pdf'
  },
  {
    title: 'Ethnic Block Voting',
    author: 'Dr Rodney Spencer',
    journal: 'Australian Civil Liberties Union',
    year: '2004',
    link: '/assets/papers/EthnicBlockVoting.pdf',
    backup: '/assets/papers/EthnicBlockVoting.pdf'
  },
  {
    title: 'Australia\'s Peril',
    author: 'Henry Lawson',
    journal: 'Poetry',
    year: '1905',
    link: '/assets/papers/AustraliasPeril.pdf',
    backup: '/assets/papers/AustraliasPeril.pdf'
  },
  {
    title: 'The Demise Of The White Australia Policy',
    author: 'Chris Anderson',
    journal: 'Nationalist Publications',
    year: '1998',
    link: '/assets/papers/TheDemiseOfTheWhiteAustraliaPolicy.pdf',
    backup: '/assets/papers/TheDemiseOfTheWhiteAustraliaPolicy.pdf'
  },
  {
    title: 'Colony and Empire',
    author: 'Thomas Ross',
    journal: 'Nationalist Publications',
    year: '1997',
    link: '/assets/papers/ColonyAndEmpire.pdf',
    backup: '/assets/papers/ColonyAndEmpire.pdf'
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
  public columns: string[] = ['title', 'author', 'journal', 'year'];
  public dataSource: MatTableDataSource<ResearchPaper>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(PAPERS);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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