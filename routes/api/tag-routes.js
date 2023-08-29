const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

//finds all tags
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product }],
    });

    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

// finds single tag by ID
router.get('/:id', async (req, res) => {
  try {
    const tagId = req.params.id;
    const tag = await Tag.findByPk(tagId, {
      include: [{ model: Product }],
    });

    if (!tag) {
      return res.status(404).json({ message: 'Tag not found' });
    }

    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});
// creates new tag
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(201).json(newTag);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Updates a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const tagId = req.params.id;
    const updatedTag = await Tag.update(req.body, {
      where: { id: tagId },
    });

    if (!updatedTag[0]) {
      return res.status(404).json({ message: 'Tag not found' });
    }

    res.status(200).json({ message: 'Tag updated successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// deletes on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const tagId = req.params.id;
    const deletedTag = await Tag.destroy({
      where: { id: tagId },
    });

    if (!deletedTag) {
      return res.status(404).json({ message: 'Tag not found' });
    }

    res.status(200).json({ message: 'Tag deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
