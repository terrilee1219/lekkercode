import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') name;
  @attr('string') image;
  @attr('boolean', { defaultValue: false }) value;

  changeValue() {
    this.value = !this.value;

    /* add a confirm when this funciton is called */
    confirm("Archive this user?")
  }
}
