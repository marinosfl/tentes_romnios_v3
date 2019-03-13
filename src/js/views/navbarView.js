import { elements } from './base';

const { navbar, sidebarIcons } = elements;

sidebarIcons.on('click', () => {
  sidebarIcons.toggleClass('active');
  navbar.toggleClass('active');
});
