var GridFilter = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    inputs: React.PropTypes.object,
    url: React.PropTypes.string,
    method: React.PropTypes.string,
    submitButton: React.PropTypes.object,
    clearButton: React.PropTypes.object,
    onSuccess: React.PropTypes.func,
    onError: React.PropTypes.func,
    onSubmit: React.PropTypes.func,
    onReset: React.PropTypes.func,
    isLoading: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      form: {},
      method: "GET",
      submitButton: {
        name: 'Filtrar',
        icon: {
          type: 'search',
          className: 'right'
        }
      },
      clearButton: {
        name: 'Limpar',
        type: 'reset',
        additionalThemeClassKeys: 'grid.filter.clearButton button.cancel'
      },
      onSuccess: function(data) {
        return true;
      },
      onError: function(xhr, status, error) {
        return true;
      },
      onSubmit: function(event) {
        return true;
      }
    };
  },

  getInitialState: function() {
    return {
      themeClassKey: 'grid.filter.wrapper grid.row'
    };
  },

  render: function() {
    return(
      <div className={this.className()}>
        <Form {...this.props} otherButtons={[this.props.clearButton]} ref="form" />
      </div>
    );
  },

  serialize: function() {
    return this.refs.form.serialize();
  }

});
