// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/lib-on-nodejs$1.0.0/src/app/views/books/list/list.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"></head><body>");

  component_globals_tag({}, out);

  out.w("<h1>Books List</h1><table id=\"livros\"><tr><td>ID</td><td>Title</td><td>Price</td><td>Edit</td><td>Remove</td></tr>");

  var for__12 = 0;

  marko_forEach(data.books, function(book) {
    var keyscope__13 = "[" + ((for__12++) + "]");

    out.w("<tr id=\"livro_" +
      marko_escapeXmlAttr(book.id) +
      "\"><td>" +
      marko_escapeXml(book.id) +
      "</td><td>" +
      marko_escapeXml(book.titulo) +
      "</td><td>" +
      marko_escapeXml(book.preco) +
      "</td><td><a href=\"/books/form/" +
      marko_escapeXmlAttr(book.id) +
      "\">Editar</a></td><td><a href=\"#\" data-ref=\"" +
      marko_escapeXmlAttr(book.id) +
      "\" data-type=\"remocao\">Remover</a></td></tr>");
  });

  out.w("</table><script src=\"/estatico/js/remove-livro.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "23");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/lib-on-nodejs$1.0.0/src/app/views/books/list/list.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
