import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './header.html';

Template.header.onCreated(function headerOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.header.helpers({
  parsha() {
    return "Noach";
  },
});

Template.header.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
