const router = require('express').Router({ mergeParams: true })
const material = require('../controllers/material')

router.route('/')
  .get(material.getMaterials)

router.route('/:id')
  .get(material.getMaterial)

router.route('/')
  .post(material.newMaterial)

router.route('/:id')
  .patch(material.updateMaterial)

router.route('/:id')
  .delete(material.deleteMaterial)

module.exports = router

