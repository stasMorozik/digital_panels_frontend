import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'privacy-policy',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2 class="font-medium">Общие положения</h2>
    <p>
      Настоящая политика конфиденциальности Сервиса Умные панели (далее - Политика) действует в отношении информации, передаваемой пользователями (далее - Пользователи) Сервиса Умные панели (далее - Сервис) в процессе регистрации Пользователей на Сервисе Мое Имя (далее - Администратор) (ИНН , ОГРН ), которое находится по адресу: г. Москва (является администратором и владельцем Сервиса), а также его аффилированным лицам, входящим в одну группу с Администратором.
    </p>
  `,
  standalone: true,
})
export class PrivacyPolicyComponent {
  
}
