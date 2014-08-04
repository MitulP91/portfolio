// Instantiate mongoose Schema
var Schema = mongoose.Schema;

// CaseStudy Schema
var CaseStudy = new Schema({
  title: { type: String, required: true, index: { unique: true } },
  link: { type: String, required: false },
  description: { type: String, required: true },
  image_url: { type: String, required: true },
  technologies: { type: Array, required: false }
});