# frozen_string_literal: true

module Locales
  extend ActiveSupport::Concern

  included do
    before_action :set_locale
  end

  def set_locale
    cookies.permanent[:locale] = params[:locale] if params[:lc].present?
    # set locale to en always
    domain_locale = request.domain == :en
    I18n.locale = cookies.permanent[:locale] || params[:locale] || domain_locale || I18n.default_locale
  end

  def default_url_options
    { locale: I18n.locale }
  end

  def self.default_url_options(options = {})
    options.merge(locale: I18n.locale)
  end
end
