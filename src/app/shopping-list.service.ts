import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  itemsRef: AngularFireList<any>;
  listItemsFirebase: Observable<any[]>;

  constructor(private afdb: AngularFireDatabase) {
    this.itemsRef = afdb.list('items', ref => ref.orderByChild('checked'));

    this.listItemsFirebase = this.itemsRef.snapshotChanges()
      .pipe(
        map(changes => {
          console.log(changes);
          return changes.map(c => {
            return { id: c.payload.key, ...c.payload.val() };
          });
        })
      );
  }

  add(newItem: any) {
    this.itemsRef.push(newItem);
  }

  remove(itemId) {
    this.itemsRef.remove(itemId);
  }

  check(editItem) {
    let itemobj = { ...editItem };
    itemobj.checked = true;
    itemobj.amount = 0;
    itemobj.id = editItem.id;

    this.itemsRef.update(itemobj.id, itemobj);

  }

}
