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
}

const PAPERS: ResearchPaper[] = [
  {
    title: 'Psychology and White Ethnocentrism',
    author: 'Kevin MacDonald',
    journal: 'The Occidental Quarterly',
    year: '2006',
    link: 'http://www.kevinmacdonald.net/WhiteEthnocentrism.pdf'
  },
  {
    title: 'The War on White Australia',
    author: 'Brenton Sanderson',
    journal: 'Occidental Observer',
    year: '2012',
    link: '/assets/TheWaronWhiteAustralia-BrentonSanderson.pdf'
  },
  {
    title: 'The White Australia Policy In Retrospect: Racism Or Realism?',
    author: 'Andrew Fraser',
    journal: 'The Occidental Quarterly',
    year: '2005',
    link: 'https://www.academia.edu/44978186/THE_WHITE_AUSTRALIA_POLICY_IN_RETROSPECT_RACISM_OR_REALISM'
  },
  {
    title: 'Demise Of The White Australia Policy',
    journal: 'Unknown',
    author: 'Dr Charles Fahey',
    year:  'Unknown',
    link: 'https://www.christianidentityaustralia.org/reads/Demise-Policy.pdf'
  },
  {
    title: 'I Stand By White Australia',
    author: 'Author Calwell',
    journal: 'Australian Labor Party',
    year: '1949',
    link: '/assets/ArthurCalwell-IStandByWhiteAustralia.pdf'
  },
  {
    title: 'Aboriginal Cannibalism In Australia',
    author: 'Unknown',
    journal: 'Unknown',
    year: 'Unknown',
    link: '/assets/AboriginalCannibalismInAustralia.pdf'
  },
  {
    title: 'Some Notes on Aboriginal Cannibalism',
    author: 'E. G. Heap',
    journal: 'Queensland Heritage',
    year: '1967',
    link: 'https://www.textqueensland.com.au/item/article/02e44ec586af038cffc507238ef49f56'
  },
  {
    title: 'Politics Essay: White Australia Policy',
    author: 'Unknown',
    journal: 'Unknown',
    year: 'Unknown',
    link: 'https://www.christianidentityaustralia.org/reads/White-Policy.pdf'
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