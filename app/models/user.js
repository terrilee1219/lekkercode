import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') name;
  @attr('string') image;
  @attr('boolean', { defaultValue: false }) archived;

  changeValue() {

    /* add a confirm when this funciton is called */
    /* NOTE: confirm returns true if press ok and false when press cancel
	TO DO: when the function returns true, change value to !value, otherwise, do nothing
     */
    confirm = confirm("Archive this user?")
    if (confirm){
    	this.archived = !this.archived;
    }

    /* after archived
  }
}
