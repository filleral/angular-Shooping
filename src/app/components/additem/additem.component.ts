import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/Models/item';
import { ItemService } from 'src/app/Services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css'],
})
export class AddItemComponent implements OnInit {
  id: number = 0;
  title: string = '';
  price: number = 0;
  quantity: number = 0;
  @Output() addItem: EventEmitter<any> = new EventEmitter();

  constructor(private itemService: ItemService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    const item = new Item();
    item.id = this.id;
    item.title = this.title;
    item.price = this.price;
    item.quantity = this.quantity;
    item.completed = false;

    // this.itemService.addItem(item);
    this.itemService.addItem(item).subscribe((i) => {
      this.router.navigate(['/']);
    });
  }
}
