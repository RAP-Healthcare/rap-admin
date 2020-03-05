import {
  Component,
  Input,
  ViewEncapsulation,
  OnDestroy,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { NgxaDatatableCollapseComponent } from './collapse/ngxa-datatable-collapse.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'xa-datatable-header',
  styleUrls: ['./ngxa-datatable-header.component.scss'],
  templateUrl: './ngxa-datatable-header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class NgxaDatatableHeaderComponent implements OnDestroy {
  @Input() header: boolean = true;
  @Input() footer: boolean = true;
  @Input() add: boolean = true;
  @Input() edit: boolean = true;
  @Input() delete: boolean = false;
  @Input() filter: boolean = true;
  @Input() formGroupFilter: FormGroup;
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() onFilter: EventEmitter<any> = new EventEmitter<any>();
  @Output() onAdd: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onDelete: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('collapse', {static: false}) collapse: NgxaDatatableCollapseComponent;

  public _search: string;
  public showFilter: boolean = false;

  ngOnDestroy(): void {}

  doSearch(search: string): void {
    if (this.showFilter) this.doFilterFunnel();
    this.onSearch.emit(search);
  }

  doFilterFunnel(): void {
    this._search = undefined;
    this.collapse.toggle();
    this.showFilter = !this.showFilter;
    if (!this.showFilter) {
      this.formGroupFilter.reset();
    }
  }

  doFilter(): void {
    this.onFilter.emit(this.formGroupFilter.value);
  }

  doAdd(): void {
    this.onAdd.emit(true);
  }

  doDelete(): void {
    this.onDelete.emit(true);
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.doSearch(this._search);
    }
  }

  onFocusSearch(): void {
    if (this.showFilter) this.doFilterFunnel();
  }

}
