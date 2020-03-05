import {
  Component,
  Input,
  ViewEncapsulation,
  Inject,
  LOCALE_ID,
  Injector,
  Output,
  EventEmitter,
} from '@angular/core';
import { ColumnMode, SelectionType, SortType, TableColumn } from '@swimlane/ngx-datatable';
import { Page } from '../../models/datatable.model';

@Component({
  selector: 'xa-datatable-base',
  styleUrls: ['./ngxa-datatable-base.component.scss'],
  templateUrl: './ngxa-datatable-base.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class NgxaDatatableBaseComponent {
  @Input() rows: any[] = [];
  @Input() columns: TableColumn[] = [];
  @Input() selected: any[] = [];
  @Input() limit: number | undefined = 10;
  @Input() count: number = 0;
  @Input() offset: number = 0;
  @Input() externalPaging: boolean = false;
  @Input() externalSorting: boolean = false;
  @Input() loadingIndicator: boolean = false;
  @Input() scrollbarH: boolean = false;
  @Input() scrollbarV: boolean = false;
  @Input() reorderable: boolean = true;
  @Input() sortType: SortType = SortType.single;
  @Input() messages: any;
  @Input() selectionType: SelectionType = SelectionType.checkbox;
  @Input() columnMode: ColumnMode = ColumnMode.force;
  @Input() headerHeight: any = 40;
  @Input() footerHeight: any = 'auto';
  @Input() rowHeight: number | 'auto' | ((row?: any) => number) = 'auto';
  @Input() header: boolean = false;
  @Input() column: boolean = false;
  @Input() footer: boolean = false;
  @Input() add: boolean = true;
  @Input() edit: boolean = true;
  @Input() delete: boolean = false;
  @Input() filter: boolean = true;
  @Input() startWithOpenData: boolean = true;
  @Output() page: EventEmitter<Page> = new EventEmitter<Page>();
  @Output() sort: EventEmitter<any> = new EventEmitter<any>();
  @Output() select: EventEmitter<any> = new EventEmitter<any>();
  @Output() activate: EventEmitter<any> = new EventEmitter<any>();

  constructor(@Inject(LOCALE_ID) public locale: string,
    public injector: Injector) {
  }

  setPage(page: Page): void {
    this.page.emit(page);
  }

  onSort(order: any): void {
    this.sort.emit(order);
  }

  onSelect(selected: any): void {
    this.select.emit(selected);
  }

  onActivate(event: any): void {
    if (event.type === 'click') {
      if (this.selectionType === 'checkbox') {
        if (event.cellIndex > 0) {
          this.activate.emit(event.row);
        }
      } else {
        this.activate.emit(event.row);
      }
    }
  }

}
