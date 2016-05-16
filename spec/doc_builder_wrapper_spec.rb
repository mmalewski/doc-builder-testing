require 'rspec'
require_relative '../lib/doc_builder_testing'

describe 'My behaviour' do
  let(:builder) { DocBuilderWrapper.new }
  let(:simple_script) { 'asserts/js/Paragraph/Text/add_text_in_paragraph.js' }

  describe 'build_doc' do
    it 'should raise correct error if input file is incorrect' do
      expect(builder.build_doc('test')).to eq("error: cannot read run file\n")
    end

    it 'should raise error if output path is incorrect' do
      expect(builder.build_doc(simple_script)).to eq("error: : save file error\n")
    end
  end

  describe 'change_output_file' do
    it 'check that change output file do not change original file' do
      before_change = File.open(simple_script, 'rb').read
      DocBuilderWrapper.change_output_file(simple_script)
      after_change = File.open(simple_script, 'rb').read
      expect(before_change).to eq(after_change)
    end

    it 'check that changed file contain returned values' do
      rebuild_result = DocBuilderWrapper.change_output_file(simple_script)
      expect(File.open(rebuild_result[:temp_script_file], 'rb').read).to include(rebuild_result[:temp_output_file])
    end

    it 'Check that temp file is same format as original file' do
      rebuild_result = DocBuilderWrapper.change_output_file(simple_script)
      expect(File.extname(rebuild_result[:temp_script_file])).to eq(File.extname(simple_script))
    end
  end

  describe 'build_doc_and_parse' do
    it 'check that parsing is performed' do
      expect(builder.build_doc_and_parse(simple_script)).to be_a(OoxmlParser::DocumentStructure)
    end
  end
end