module.exports = {


  friendlyName: 'Create',


  description: 'Create post.',


  inputs: {
    name: {
      description: 'Title of post object',
      type: 'string',
      required: true
    },
    description: {
      type: 'string', required: true
    },
    status: {
      type: 'boolean'
    }
  },


  exits: {},


  fn: async function (inputs) {
    console.log('We are now inside of post/create action');

    // const userId = this.req.session.userId
    // console.log(userId)
    // console.log(this.req.me)

    await Department.create({name: inputs.name, description: inputs.description, status: inputs.status});

    this.res.redirect('/department');
    // return;
  }


};
