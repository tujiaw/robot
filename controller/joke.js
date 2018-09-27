const { TextJoke } = require('../model/joke')

module.exports = {
    saveTextJoke: async function(obj) {
        const f = await TextJoke.getById(obj.id);
        if (f.length) {
            console.log('is exist, id:' + obj.id)
        } else {
            await new TextJoke(obj).save();
        }
    }
}
