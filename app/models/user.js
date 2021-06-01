import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') name;
  @attr('string') image;
  @attr('boolean', { defaultValue: false }) value;

  /*add new attribute for the users: boolean archive*/
  @attr('boolean', {defaultValue: false}) archived;

  changeValue() {
    this.value = !this.value;
  }
}
