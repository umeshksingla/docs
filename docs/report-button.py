from __future__ import absolute_import
from docutils import nodes
import jinja2
from sphinx.util.compat import Directive
from docutils.parsers.rst import directives
from docutils.parsers.rst.directives import unchanged

BUTTON_TEMPLATE = jinja2.Template(u"""
	<div class="row">
		<div class="col-sm-4">
			<button class="report-button" onclick="play()">
				{{ text }}
			</button>
		</div>
	</div>
	<div class="row">
		<div id="myForm" class="col-sm-8 bug-form">
			<p style="padding-top: 8px">Your suggestion: </p>
			<div>
				<form>
					<input
						type="text"
						placeholder="Summary"
						name="summary">
					<textarea
						rows="5"
						cols="60"
						wrap="hard"
						placeholder="Description"
						name="description"></textarea>
				</form>
			</div>
		</div>
	</div>
	""")

class button_node(nodes.General, nodes.Element):
	"""
	"""
	pass


class ButtonDirective(Directive):
	"""
	"""
	required_arguments = 0

	option_spec = {
	    'link': unchanged,
	    'text': unchanged
	}

	def run(self):
		"""
		"""
		env = self.state.document.settings.env
		app = env.app

		node = button_node()
		node['link'] = self.options['link']
		node['text'] = self.options['text']
		return [node]


def visit_button_node(self, node):
	html = BUTTON_TEMPLATE.render(link=node['link'], text=node['text'])
	self.body.append(html)
	raise nodes.SkipNode


def setup(app):
	app.add_node(button_node,
		html=(visit_button_node, None))
	app.add_directive('report-button', ButtonDirective)
	directives.register_directive('report-button', ButtonDirective)
