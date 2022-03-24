import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface ResearchPaper {
  title: string;
  journal: string;
  year: string;
  link: string;
}

const PAPERS: ResearchPaper[] = [
  {
    title: 'Psychology and White Ethnocentrism',
    journal: 'The Occidental Quarterly',
    year: '2006',
    link: 'http://www.kevinmacdonald.net/WhiteEthnocentrism.pdf'
  },
  {
    title: 'The War on White Australia',
    journal: 'Occidental Observer',
    year: '2012',
    link: '/assets/TheWaronWhiteAustralia-BrentonSanderson.pdf'
  },
  {
    title: 'The White Australia Policy In Retrospect: Racism Or Realism?',
    journal: 'The Occidental Quarterly',
    year: '2005',
    link: 'https://www.academia.edu/44978186/THE_WHITE_AUSTRALIA_POLICY_IN_RETROSPECT_RACISM_OR_REALISM'
  },
  {
    title: 'Demise Of The White Australia Policy',
    journal: 'Unknown (Dr Charles Fahey)',
    year:  'Unknown',
    link: 'https://www.christianidentityaustralia.org/reads/Demise-Policy.pdf'
  },
  {
    title: 'I Stand By White Australia',
    journal: 'Australian Labor Party',
    year: '1949',
    link: '/assets/ArthurCalwell-IStandByWhiteAustralia.pdf'
  },
  {
    title: 'Aboriginal Cannibalism In Australia',
    journal: 'Unknown',
    year: 'Unknown',
    link: '/assets/AboriginalCannibalismInAustralia.pdf'
  },
  {
    title: 'Some Notes on Aboriginal Cannibalism',
    journal: 'Queensland Heritage',
    year: '1967',
    link: 'https://espace.library.uq.edu.au/data/UQ_242712/Qld_heritage_v1_no7_1967_p25_29.pdf?Expires=1648115290&Key-Pair-Id=APKAJKNBJ4MJBJNC6NLQ&Signature=bTgqLRajeXO-NpJZOkSNy-vNEjNZVNhFT3oWE6oDZoZ-l6F5tuGhO8nJv2EgwNWJt3M4C2zHtLdvLkX66g9sIOoyuqPraGQ4XV7VlAt1jA71otE9BfIYVcZVNbRnfDIoXu49y-AzqU-trSJTNcB3fYhK3tvh8BQor3c3~w1bi-kQX~D-DWAdZVUPgarLpJDMaJqkMIto6g92R8W97wrHboUEeDDgf-OgG8NgR1IAYika4JYqwgqd1mOsd~zOEu0cTpP-sTRdpeO5OGCFl9xvMIiWnPROIqwCNg8j2svD1MMUMaltKtcTkm8siGjKOxcm~cqpMDKolKKPCDCV8WMr4g__'
  },
  {
    title: 'Politics Essay: White Australia Policy',
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
  public columns: string[] = ['title', 'journal', 'year'];
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