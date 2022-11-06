import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import {
  addDoc,
  getDocs,
  Firestore,
  collection,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ngOnInit(): void {
    // this.postTask({ desc: 'hide' });
    // setTimeout(() => {
    //   this.getTasks();
    // }, 400);
  }
  title = 'nino-s-books';
  constructor(public auth: AuthService, public firestore: Firestore) {}

  addData() {
    const dbInstance = collection(this.firestore, 'books');
    addDoc(dbInstance, { title: 'Lolita' })
      .then(() => {
        alert('Data Sent');
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  getData() {
    const dbInstance = collection(this.firestore, 'books');
    getDocs(dbInstance).then((response) => {
      console.log(
        response.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  }
  // public data: any = [];
  // tasksSubject: BehaviorSubject<any[]> = new BehaviorSubject([] as any[]);

  // postTask(task: any) {
  //   const dbInstance = collection(this.firestore, 'tasks');
  //   addDoc(dbInstance, task).then(
  //     () => {
  //       console.log('data sent');
  //     },
  //     (err) => {
  //       alert(err.message);
  //     }
  //   );
  // }

  // getTasks() {
  //   const dbInstance = collection(this.firestore, 'tasks');
  //   getDocs(dbInstance)
  //     .then((res) => {
  //       this.data = [
  //         ...res.docs.map((item) => {
  //           return { ...item.data(), id: item.id };
  //         }),
  //       ];
  //       this.tasksSubject.next(this.data);
  //     })
  //     .catch((err) => console.log(err.message));
  // }
}
