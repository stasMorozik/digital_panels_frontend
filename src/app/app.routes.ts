import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignComponent } from './pages/sign/sign.component';
import { SignInComponent } from './pages/sign/in/sign-in.component';
import { SignUpComponent } from './pages/sign/up/sign-up.component';
import { UserAgreementComponent } from './pages/docs/user-agreement/user-agreement.component';
import { PrivacyPolicyComponent } from './pages/docs/privacy-policy/privacy-policy.component';
import { guardNotAuthorizedPage, guardAuthorizedPage } from './app.guards';
import { WorkSpaceComponent } from './pages/work-space/work-space.component';
import { FileListComponent } from './pages/work-space/file/list/file-list.component';
import { FileDetailComponent } from './pages/work-space/file/detail/file-detail.component';
import { FileNewComponent } from './pages/work-space/file/new/file-new.component';
import { ContentListComponent } from './pages/work-space/content/list/content-list.component';
import { ContentDetailComponent } from './pages/work-space/content/detail/content-detail.component';
import { ContentNewComponent } from './pages/work-space/content/new/content-new.component';
import { PlaylistListComponent } from './pages/work-space/playlist/list/playlist-list.component';
import { PlaylistDetailComponent } from './pages/work-space/playlist/detail/playlist-detail.component';
import { PlaylistNewComponent } from './pages/work-space/playlist/new/playlist-new.component';
import { TaskListComponent } from './pages/work-space/task/list/task-list.component';
import { TaskDetailComponent } from './pages/work-space/task/detail/task-detail.component';
import { TaskNewComponent } from './pages/work-space/task/new/task-new.component';
import { DeviceListComponent } from './pages/work-space/device/list/device-list.component';
import { DeviceDetailComponent } from './pages/work-space/device/detail/device-detail.component';
import { DeviceNewComponent } from './pages/work-space/device/new/device-new.component';
import { GroupListComponent } from './pages/work-space/group/list/group-list.component';
import { GroupDetailComponent } from './pages/work-space/group/detail/group-detail.component';
import { GroupNewComponent } from './pages/work-space/group/new/group-new.component';
import { AssemblyListComponent } from './pages/work-space/assembly/list/assembly-list.component';
import { AssemblyDetailComponent } from './pages/work-space/assembly/detail/assembly-detail.component';
import { AssemblyNewComponent } from './pages/work-space/assembly/new/assembly-new.component';
import { DocsComponent } from './pages/docs/docs.component';

export const routes: Routes = [
  {
    path: 'sign',
    component: SignComponent,
    canActivate: [guardNotAuthorizedPage],
    children: [
      {
        path: 'in',
        title: 'Вход', 
        component: SignInComponent
      },
      {
        path: 'up',
        title: 'Получение доступа', 
        component: SignUpComponent
      },
    ]
  },
  {
    path: 'work-space',
    component: WorkSpaceComponent,
    title: 'Панель администратора',
    canActivate: [guardAuthorizedPage],
    children: [
      {
        path: 'files',
        component: FileListComponent,
        data: {title: 'Список файлов'}
      },
      {
        path: 'files/detail/:id',
        component: FileDetailComponent,
        data: {title: 'Детальное описание файл'}
      },
      {
        path: 'files/new',
        component: FileNewComponent,
        data: {title: 'Создание файла'}
      },
      {
        path: 'contents',
        component: ContentListComponent,
        data: {title: 'Список контента'}
      },
      {
        path: 'contents/detail/:id',
        component: ContentDetailComponent,
        data: {title: 'Детальное описание контента'}
      },
      {
        path: 'contents/new',
        component: ContentNewComponent,
        data: {title: 'Создание контента'}
      },
      {
        path: 'playlists',
        component: PlaylistListComponent,
        data: {title: 'Список плэйлистов'}
      },
      {
        path: 'playlists/detail/:id',
        component: PlaylistDetailComponent,
        data: {title: 'Детальное описание плэйлиста'}
      },
      {
        path: 'playlists/new',
        component: PlaylistNewComponent,
        data: {title: 'Создание плэйлиста'}
      },
      {
        path: 'tasks',
        component: TaskListComponent,
        data: {title: 'Список заданий'}
      },
      {
        path: 'tasks/detail/:id',
        component: TaskDetailComponent,
        data: {title: 'Детальное описание задания'}
      },
      {
        path: 'tasks/new',
        component: TaskNewComponent,
        data: {title: 'Создание задания'}
      },
      {
        path: 'devices',
        component: DeviceListComponent,
        data: {title: 'Список устройств'}
      },
      {
        path: 'devices/detail/:id',
        component: DeviceDetailComponent,
        data: {title: 'Детальное описание устройства'}
      },
      {
        path: 'devices/new',
        component: DeviceNewComponent,
        data: {title: 'Создание устройства'}
      },
      {
        path: 'groups',
        component: GroupListComponent,
        data: {title: 'Список групп устройств'}
      },
      {
        path: 'groups/detail/:id',
        component: GroupDetailComponent,
        data: {title: 'Детальное описание группы устройств'}
      },
      {
        path: 'groups/new',
        component: GroupNewComponent,
        data: {title: 'Создание группы устройств'}
      },
      {
        path: 'assemblies',
        component: AssemblyListComponent,
        data: {title: 'Список сборок'}
      },
      {
        path: 'assemblies/detail/:id',
        component: AssemblyDetailComponent,
        data: {title: 'Детальное описание сборки'}
      },
      {
        path: 'assemblies/new',
        component: AssemblyNewComponent,
        data: {title: 'Создание сборки'}
      }
    ]
  },
  {
    path: 'docs',
    component: DocsComponent,
    title: 'Документы',
    children: [
      {
        path: 'user-agreement',
        component: UserAgreementComponent,
        data: {
          title: 'Пользовательское соглашение'
        }
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
        data: {
          title: 'Политика конфиденциальности'
        }
      },
    ]
  },
  { 
    path: '**', 
    component: NotFoundComponent 
  }
];
