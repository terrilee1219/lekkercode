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



     
     // Code to examine below ID: 001
     /*
    var confirm = confirm("Archive this user?");
    if (confirm){
    	this.archived = !this.archived;
    }
    else{
      this.archived = this.archived; 
    }
    */

    /* 001 BUG: when one user is archived the other users can not be archived*/
    // TEST1: try confirm function without if statement
    //confirm("testing")
    // RESULT: confirm function without if statement is working fine

    // TEST2: assign confirm reult to variable
    // var confirmResult = confirm("testing");
    // RESULT: working fine

    // TEST3: add if statement below the confirm code
    /*
    var confirmResult = confirm("testing");
    if (confirmResult){
      this.archived = !this.archived;
    }
    */
    // RESULT: working fine now..


    // TO DO: If this.archived is true, confirm prompt a different: Do you want to un-archive?
    if (!this.archived){
      var confirmResult = confirm("Archive user?");
      if (confirmResult){
        this.archived = !this.archived;
      }
    } else {
      var confirmResult = confirm("Un-archive user?");
      if (confirmResult){
        this.archived = !this.archived;
      }
    }
    

  }
}
