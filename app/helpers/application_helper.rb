module ApplicationHelper
  include ActionView::Helpers::AssetTagHelper

  # FIXME: That's too bad...
  def custom_image_url(url)
    image_url(url).gsub!('http://0.0.0.0:3000', 'http://shimomuh-brain.net')
  end
end
