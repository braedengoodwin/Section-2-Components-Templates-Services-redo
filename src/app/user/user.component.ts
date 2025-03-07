import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// this is a type alias
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // the '!' tells typescript that we know that avatar WILL DEFINITELY be assigned a value eventually
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();

  // this getter is referenced as a 'property' in the user.component.html file
  get imagePath() {
    return '/assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
