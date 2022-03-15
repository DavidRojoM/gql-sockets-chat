import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../shared/services/local-storage/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {}

  login() {
    if (!this.form.valid) {
      return console.log('invalid form');
    }

    const { name } = this.form.value;
    this.localStorageService.set('name', name);
    this.router.navigateByUrl('/chat');
  }
}
