from docutils import nodes
import jinja2
from sphinx.util.compat import Directive

BUTTON_TEMPLATE = jinja2.Template(u"""
	<a href="{{ link }}" class="report-button"> {{ text }} </a>
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
	    'link': "",
	    'text': ""
	}

	def run(self):
		"""
		"""
		env = self.state.document.settings.env
		app = env.app

		node = button_node()
		node['link'] = self.option_spec['link']
		node['text'] = self.option_spec['text']
		return [node]


def html_visit_button_node(self, node):
	html = BUTTON_TEMPLATE.render(link=node['link'], text=node['text'])
	self.body.append(html)
	raise nodes.SkipNode

def setup(app):
	app.add_node(button_node,
		html=(html_visit_button_node, None))
	app.add_directive('report-button', ButtonDirective)